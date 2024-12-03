import React, { useState } from "react";
import { sendMessage } from "../../APIS/firebaseAPI";

interface ChatInputProps {
  user: string;
}
