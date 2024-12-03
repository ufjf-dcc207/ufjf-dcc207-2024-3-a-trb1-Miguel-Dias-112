import React, { useEffect, useState } from "react";
import { getMessagesRealTime } from "../APIS/firebaseAPI";

interface Message {
  id: string;
  user: string;
  message: string;
  timestamp: any; 
}