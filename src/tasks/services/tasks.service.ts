import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './../entities/task.entity';


@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(Task) private tasksRepository: Repository<Task>
    ) {}

    // Aqui empieza la manipulación de datos en si
    findAll() {
        return this.tasksRepository.find();
    }

    findOne(id: number) {
        return this.tasksRepository.findOne(id);
    }

    // aca puedo usar un dto como validación de datos y tipado
    create(body: any) {
        // const newTask = new Task();
        // newTask.name = body.name;

        // Cuando tengo muchos campos. Create hace un match con el objeto en lugar 
        // de ir uno por uno
        const newTask = this.tasksRepository.create(body);

        return this.tasksRepository.save(newTask);
    }

    async update(id: number, body: any) {
        const task = await this.tasksRepository.findOne(id);
        this.tasksRepository.merge(task, body);
        return this.tasksRepository.save(task);
    }

    async delete(id: number) {
        await this.tasksRepository.delete(id);
        return true;
    }

}
