(async () => {
  const { getConfig } = await import("./connections/config");

  const { logger } = await import("./main");
  const { socketOps, httpServer, mongoOps } = await import("./connections");

  (async () => {
    try {
      logger.debug("start int server ");
      const promise = await Promise.all([mongoOps.init(), socketOps()]);

      const { SERVER_PORT } = getConfig();
      httpServer.listen(SERVER_PORT, () => {
        logger.info(`Server listening to the port ${SERVER_PORT}`);
      });
    } catch (error) {
      console.trace(error);

      logger.error(`Server listen error ${error}`);
    }
  })();

  process
    .on("unhandledRejection", (reason, p) => {
      logger.error(
        reason,
        "Unhandled Rejection at Promise >> ",
        new Date(),
        " >> ",
        p
      );
    })
    .on("uncaughtException", (err) => {
      logger.error("Uncaught Exception thrown", new Date(), " >> ", "\n", err);
    });
})();
