import content from '../content'

describe('content variable', () => {
    it('has personal_detail key', () => {
        expect(content).toHaveProperty('personal_detail')
    })
    it('has careers key', () => {
        expect(content).toHaveProperty('careers')
    })
    it('has projects key', () => {
        expect(content).toHaveProperty('projects')
    })
    it('has skills key', () => {
        expect(content).toHaveProperty('skills')
    })
    it('has educations key', () => {
        expect(content).toHaveProperty('educations')
    })
    describe('personal_detail', () => {
        const personal_detail = content.personal_detail
        it('has name key', () => {
            expect(personal_detail).toHaveProperty('name')
            expect(typeof personal_detail.name).toBe('string')
        })
        it('has job_title key', () => {
            expect(personal_detail).toHaveProperty('job_title')
            expect(typeof personal_detail.job_title).toBe('string')
        })
        it('has email key', () => {
            expect(personal_detail).toHaveProperty('email')
            expect(typeof personal_detail.email).toBe('string')
        })
        it('has location key', () => {
            expect(personal_detail).toHaveProperty('location')
            expect(typeof personal_detail.location).toBe('string')
        })
    })
    describe('careers', () => {
        const careers = content.careers
        it('is an array', () => {
            expect(Array.isArray(careers)).toBe(true)
            expect(careers.length).toBeGreaterThan(0)
        })
        it('has appropriate keys in each object', () => {
            careers.forEach(career => {
                expect(career).toHaveProperty('title')
                expect(typeof career.title).toBe('string')
                expect(career).toHaveProperty('company')
                expect(typeof career.company).toBe('string')
                expect(career).toHaveProperty('year')
                expect(typeof career.year).toBe('string')
                expect(career).toHaveProperty('contents')
                expect(Array.isArray(career.contents)).toBe(true)
            })
        })
    })
    describe('projects', () => {
        const projects = content.projects
        it('is an array', () => {
            expect(Array.isArray(projects)).toBe(true)
            expect(projects.length).toBeGreaterThan(0)
        })
        it('has appropriate keys in each object', () => {
            projects.forEach(project => {
                expect(project).toHaveProperty('title')
                expect(typeof project.title).toBe('string')
                expect(project).toHaveProperty('year')
                expect(typeof project.year).toBe('string')
                expect(project).toHaveProperty('contents')
                expect(Array.isArray(project.contents)).toBe(true)
            })
        })
    })
    describe('skills', () => {
        const skills = content.skills
        it('is an array', () => {
            expect(Array.isArray(skills)).toBe(true)
            expect(skills.length).toBeGreaterThan(0)
        })
        it('has appropriate keys in each object', () => {
            skills.forEach(skill => {
                expect(skill).toHaveProperty('section')
                expect(typeof skill.section).toBe('string')
                expect(skill).toHaveProperty('contents')
                expect(Array.isArray(skill.contents)).toBe(true)
            })
        })
    })
    describe('educations', () => {
        const educations = content.educations
        it('is an array', () => {
            expect(Array.isArray(educations)).toBe(true)
            expect(educations.length).toBeGreaterThan(0)
        })
        it('has appropriate keys in each object', () => {
            educations.forEach(education => {
                expect(education).toHaveProperty('title')
                expect(typeof education.title).toBe('string')
                expect(education).toHaveProperty('university')
                expect(typeof education.university).toBe('string')
                expect(education).toHaveProperty('year_completion')
                expect(typeof education.year_completion).toBe('string')
                expect(education).toHaveProperty('image')
                expect(typeof education.image).toBe('string')
            })
        })
    })
})