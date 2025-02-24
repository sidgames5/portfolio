export default class Competition {
    constructor(name, location, time, award, desc, technologies, links) {
        this.name = name;
        this.desc = desc;
        this.technologies = technologies;
        this.links = links;
        this.time = time;
        this.location = location;
        this.award = award;
    }
}