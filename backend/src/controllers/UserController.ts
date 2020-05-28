import { Request, Response} from 'express'
import EmailService from '../services/EmailService';

const users = [
    { name: 'Gustavo', email: 'tartatavo3@gmail.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Gustavo Santana',
                email: 'tartatavo3@gmail.com'
            },
            message: {
                subject: 'Bem-vindo',
                body: 'Seja bem-vindo'
            }
        });

        return res.send();
    }
};