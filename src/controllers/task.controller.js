const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { taskValidationRules, validate } = require('../utils/validator');

const createTask = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    const task = await prisma.task.create({
      data: {
        name,
        userId,
        status: 'pending',
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error creating task' });
  }
};

const getTasks = async (req, res) => {
  try {
    const userId = req.user.id;

    let { page = 1, limit = 10, search = '', status } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const skip = (page - 1) * limit;

    const where = {
      userId,
      ...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
      ...(status ? { status } : {}),
    };

    const total = await prisma.task.count({ where });
    const tasks = await prisma.task.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
    });

    res.json({ tasks, total, page, limit });
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching tasks' });
  }
};

const updateTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const taskId = parseInt(req.params.id);
    const { status } = req.body;

    if (!['pending', 'completed'].includes(status))
      return res.status(400).json({ error: 'Invalid status value' });

    // Verify task ownership
    const existingTask = await prisma.task.findUnique({ where: { id: taskId } });
    if (!existingTask || existingTask.userId !== userId)
      return res.status(404).json({ error: 'Task not found or unauthorized' });

    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: { status },
    });

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Server error updating task' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const userId = req.user.id;
    const taskId = parseInt(req.params.id);

    // Verify task ownership
    const existingTask = await prisma.task.findUnique({ where: { id: taskId } });
    if (!existingTask || existingTask.userId !== userId)
      return res.status(404).json({ error: 'Task not found or unauthorized' });

    await prisma.task.delete({ where: { id: taskId } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Server error deleting task' });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
