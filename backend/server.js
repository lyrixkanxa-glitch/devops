import Fastify from "fastify";

const fastify = Fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
                translateTime: 'HH:MM:ss',
                ignore: 'pid,hostname'
            }
        }
    }
})

const start = async function (server){
   try {
       fastify.listen({port:'3000'})
       fastify.log.info('Server is running at http://localhost:3000');
   }catch (error){
       fastify.log.error(error);
       process.exit(1)
   }
}

fastify.get('/', async (req, res)=>{
    return "Hellow world"
});

start()