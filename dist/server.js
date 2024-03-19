"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));

// src/prisma/index.ts
var import_client = require("@prisma/client");
var prismaClient = new import_client.PrismaClient();
var prisma_default = prismaClient;

// src/services/CreateNewsService.ts
var CreateNewsService = class {
  execute(_0) {
    return __async(this, arguments, function* ({
      author,
      title,
      subtitle,
      category,
      content,
      end_text,
      image,
      image_credits,
      link
    }) {
      if (!author || !title || !subtitle || !content || !category) {
        throw new Error("Preencha todos os campos para enviar a not\xEDcia!");
      }
      const news = prisma_default.news.create({ data: {
        author,
        category,
        title,
        subtitle,
        content,
        end_text,
        image,
        image_credits,
        link
      } });
      return news;
    });
  }
};

// src/controllers/CreateNewsController.ts
var CreateNewsController = class {
  handle(request, reply) {
    return __async(this, null, function* () {
      const {
        author,
        title,
        subtitle,
        category,
        content,
        end_text,
        image,
        image_credits,
        link
      } = request.body;
      const newsService = new CreateNewsService();
      const news = yield newsService.execute({
        author,
        title,
        subtitle,
        category,
        content,
        end_text,
        image,
        image_credits,
        link
      });
      reply.send(news);
    });
  }
};

// src/services/ListNewsService.ts
var ListNewsService = class {
  execute() {
    return __async(this, null, function* () {
      const news = yield prisma_default.news.findMany();
      return news;
    });
  }
};

// src/controllers/ListNewsController.ts
var ListNewsController = class {
  handle(request, reply) {
    return __async(this, null, function* () {
      const listNewsService = new ListNewsService();
      const news = yield listNewsService.execute();
      reply.send(news);
    });
  }
};

// src/services/FindNewsByIdService.ts
var FindNewsByIdService = class {
  execute(_0) {
    return __async(this, arguments, function* ({ id }) {
      if (!id) {
        throw new Error("Id inv\xE1lido ou inexistente");
      }
      const findNews = yield prisma_default.news.findFirst({
        where: {
          id
        }
      });
      return findNews;
    });
  }
};

// src/controllers/FindNewsByIdController.ts
var FindNewsByIdController = class {
  handle(request, reply) {
    return __async(this, null, function* () {
      const { id } = request.query;
      const findNewsByIdService = new FindNewsByIdService();
      const newsById = yield findNewsByIdService.execute({ id });
      reply.send(newsById);
    });
  }
};

// src/routes.ts
function routes(fastify, options) {
  return __async(this, null, function* () {
    fastify.get(
      "/teste",
      (request, reply) => __async(this, null, function* () {
        return {
          ok: true
        };
      })
    );
    fastify.post(
      "/news",
      (request, reply) => __async(this, null, function* () {
        return new CreateNewsController().handle(request, reply);
      })
    );
    fastify.get(
      "/news",
      (request, reply) => __async(this, null, function* () {
        return new ListNewsController().handle(request, reply);
      })
    );
    fastify.get(
      "/newsbyid",
      (request, reply) => __async(this, null, function* () {
        return new FindNewsByIdController().handle(request, reply);
      })
    );
  });
}

// src/server.ts
var app = (0, import_fastify.default)({ logger: true });
var port = 3333;
var start = () => __async(exports, null, function* () {
  yield app.register(import_cors.default);
  yield app.register(routes);
  try {
    yield app.listen({ port });
  } catch (error) {
    process.exit(1);
  }
});
start();
