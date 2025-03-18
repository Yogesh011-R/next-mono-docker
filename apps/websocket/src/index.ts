// @ts-nocheck
import { client } from "@repo/db";

Bun.serve({
  port: 8081,
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return; // do not return a Response
    }
    return new Response("Upgrade failed", { status: 500 });
  },
  websocket: {
    message(ws, message) {
      client.user.create({
        data: {
          name: Math.random().toString(),
          password: Math.random().toString(),
          email: Math.random().toString()
        }
      })
      ws.send(message);
    },
  },
});