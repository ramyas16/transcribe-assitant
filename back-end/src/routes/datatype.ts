import {
    createDataType,
    deleteDataType,
    getDataType,
    updateDataType
} from '../controllers/datatype';

import { Router } from 'express';

const router = Router();

console.log('Router :: Datatype');

router.post('/', createDataType);

router.get('/', getDataType);

router.patch('/:id', updateDataType);

router.delete('/:id', deleteDataType);

export default router;
