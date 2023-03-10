import {
    createTemplate,
    deleteTemplate,
    getTemplate,
    updateTemplate
} from '../controllers/template';

import { Router } from 'express';

const router = Router();

console.log('Router :: Template');

router.post('/', createTemplate);

router.get('/', getTemplate);

router.patch('/:id', updateTemplate);

router.delete('/:id', deleteTemplate);

export default router;
