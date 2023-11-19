import axios from "axios";

const token = "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";

const api = axios.create({ baseURL: "https://api.github.com/users" });

export { api, token };
