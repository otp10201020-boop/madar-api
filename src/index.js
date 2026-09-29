export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return Response.json({
        ok: true,
        service: "madar-api",
        message: "Madar API is running"
      });
    }

    return Response.json(
      {
        ok: false,
        error: "Not Found"
      },
      { status: 404 }
    );
  }
};
