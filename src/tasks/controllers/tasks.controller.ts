import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './../services/tasks.service';

@Controller('api/tasks')

export class TasksController {

    constructor(
        private tasksService: TasksService
    ){}

    @Get('/filters')
    getAll() {
        return this.tasksService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.tasksService.findOne(id);
    }

    @Post()
    create(@Body() body: any) {
        return this.tasksService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body): any{
        return this.tasksService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.tasksService.delete(id);
    }

}
