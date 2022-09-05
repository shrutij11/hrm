import { expect, should,} from "chai";
import request from "supertest";
const app= require("../src/app")


//TESTING SERVER
describe("server checks", function(){
    it("server is created without error", function(done){
        request(app).get ("/").expect(200, done);
    });
})

// TEST FOR GET ROUTE
describe("Get /alldepartments",()=>{
    it("It should get all the departments", (done) =>{
        request(app).get ("/alldepartments")
        .end((err, res)=>{
            expect(res.statusCode).to.equal(200);
            expect(err).to.be.null;
            done();
        })
    });
    it("It should not get all the departments if the route is not valid", (done) =>{
        request(app).get ("/alldepartment")
        .end((err, res)=>{
            expect(res.statusCode).to.equal(404);
            expect(err).to.be.null;
            done();
        })
    });
})

//TEST FOR POST ROUTE
describe('POST /create/department', () => {

    it('It should POST a new task ', (done) => {
        request(app)
        .post('/create/department')
       .send({department_name: "biodepartment"})
        .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.not.empty;
            expect(err).to.be.null;
            done();
        });
    });
    it('Post  department name length should be greater than 2', (done) => {
        request(app)
        .post('/create/department')
       .send({ department_name: "en"})
        .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(err).to.be.null;
            done();
        });
    });
    it('Post  department name should have letters', (done) => {
        request(app)
        .post('/create/department')
       .send({ department_name: "123"})
        .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(err).to.be.null;
            done();
        });
    });
})

//TEST FOR PUT ROUTE
describe('PUT /update/department/:id', () => {

    it('It should PUT a new task ', (done) => {
        const id=3;
        request(app)
        .put('/update/department/'+id)
       .send({ department_name:"biodeptmnt"})
        .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.not.empty;
            expect(err).to.be.null;
            done();
        });
    });
    it('department name length should be greater than 2', (done) => {
        const id=3;
        request(app)
        
        .put('/update/department/'+id)
       .send({ department_name: "en"})
        .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(err).to.be.null;
            done();
        });
    });
    it('department name should have letters', (done) => {
        const id=3;
        request(app)
        
        .put('/update/department/'+id)
       .send({ department_name: "123"})
        .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(err).to.be.null;
            done();
        });
    });
})

//TEST FOR DELETE ROUTE
describe('DELETE /delete/department/:id', () => {


    it('it should delete an existing department', (done) => {
        const id=37;
        request(app)
        
        .delete('/delete/department/'+id)
       
        .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(err).to.be.null;
            done();
        });
    });
    it('it should not delete if id is not valid', (done) => {
        const id=399;
        request(app)
        
        .delete('/delete/department/'+id)
       
        .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            expect(err).to.be.null;
            done();
        });
    });
})





