import axios from "axios";

const token = "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";

const api = axios.create({ baseURL: "https://api.github.com/users" });

export { api, token };
