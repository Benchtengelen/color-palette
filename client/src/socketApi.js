import io, { Socket } from 'socket.io-client';

 let socket;

 export const init = () => {
	console.log("sunucuya bağlanıyor");
	socket = io("http://localhost:3001", {
		transports: ["websocket"],
	});

	socket.on("connect", () => {
		console.log("sunucuya başarıyla bağlandı");
	});
} 

export const send = (color) => {
	socket.emit("newColor", color);
}

export const subscribe = (cb) => {
	 socket.on("receive", (color) => {
		console.log(color);
		cb(color);
	 })
}









