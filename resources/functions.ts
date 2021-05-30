export default {
    createEvent: {
        handler: "handler.createEvent",
        events: [
            {
                http: {
                    method: "POST",
                    path: "event/create",
                    cors: true
                }
            }
        ]
    },
    getEvent: {
        handler: "handler.getEvent",
        events: [
            {
                http: {
                    method: "POST",
                    path: "event/get",
                    cors: true
                }
            }
        ]
    },
}
