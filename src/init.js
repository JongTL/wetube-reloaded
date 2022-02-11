//필요한 것들을 import 해주는 파일

import "./db"; //db를 위해 파일 자체를 임포트
import "./models/Video";
import app from "./server";



const PORT=4000;
const handleListening=() =>
    console.log(`✅Server Listening on port http://localhost:${PORT}`);

app.listen(PORT,handleListening);