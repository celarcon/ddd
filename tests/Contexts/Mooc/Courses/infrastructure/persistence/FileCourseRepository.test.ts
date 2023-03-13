import { Course } from "../../../../../../src/Contexts/Mooc/Courses/domain/Course"
import { FileCourseRepository } from "../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository";
import { Uuid } from "../../../../../../src/Contexts/Shared/domain/value-object/Uuid";

describe('FileCourseRepository', () => {
    it('should save a course', async () => {
        const expectedCourse = new Course(new Uuid('ef8ac118-8d7f-49cc-abec-78e0d05af80a'), 'name', 'duration');
        const repository = new FileCourseRepository();

        await repository.save(expectedCourse);

        const course = await repository.search('id');
        expect(course).toEqual(expectedCourse);

    })
})