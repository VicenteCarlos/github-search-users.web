import axios from "axios";

const token = "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";

const api = axios.create({ baseURL: "https://api.github.com/users" });

export { api, token };
