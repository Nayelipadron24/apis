// HistActController.ts

import { Request, Response } from 'express';
import pool from '../database';

class HistActController {
  public async list(req: Request, res: Response): Promise<void> {
    const { idUsuario } = req.params; // Cambia "iduser" a "idUsuario"
    const Estatus = 'CANCELADA';

    const act = await pool.query('SELECT a.idActividad, a.Nombre_Actividad, a.Descripcion, u_encargado.nombre AS Encargado, u_participante.nombre AS Participante, est.nombreEstatus AS Estatus, a.Fecha_de_inicio, a.Fecha_de_fin FROM actividades a LEFT JOIN USUARIOS u_encargado ON a.Encargado = u_encargado.idUsuario LEFT JOIN usuarios u_participante ON a.Participante = u_participante.idUsuario JOIN Estatus est ON a.Estatus = est.nombreEstatus WHERE Estatus = ? AND (a.Participante = ? OR a.Encargado = ?)', [Estatus, idUsuario, idUsuario]);
    res.json(act);
  }
}

export const histActController = new HistActController();
