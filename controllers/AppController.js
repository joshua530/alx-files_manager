import dbClient from '../utils/db';
import redisClient from '../utils/redis';

class AppController {
  static getStatus(req, res) {
    if (redisClient.isAlive() && dbClient.isAlive()) {
      res.status(200).json({ redis: true, db: true }, 200);
    }
  }

  static async getStats(req, res) {
    const files = await dbClient.nbFiles();
    const users = await dbClient.nbUsers();
    const obj = {
      users,
      files,
    };
    res.status(200).json(obj);
  }
}

module.exports = AppController;
