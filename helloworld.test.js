const helloWorld = require('./helloworld');
test("string",()=>{
    const result = helloWorld();
    except(result).toBe("hello world !");
});
