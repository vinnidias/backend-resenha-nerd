"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/controllers/CreateNewsController.ts
var CreateNewsController_exports = {};
__export(CreateNewsController_exports, {
  CreateNewsController: () => CreateNewsController
});
module.exports = __toCommonJS(CreateNewsController_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateNewsController
});
