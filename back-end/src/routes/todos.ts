import { createToDo, deleteToDo, getToDo, updateToDo } from '../controllers/todos';

import { Router } from 'express';

const router = Router();

console.log('Router :: Todo');

router.post('/', createToDo);

router.get('/', getToDo);

router.patch('/:id', updateToDo);

router.delete('/:id', deleteToDo);

export default router;
