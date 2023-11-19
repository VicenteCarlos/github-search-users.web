import axios from "axios";

const token = "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";

const api = axios.create({ baseURL: "https://api.github.com/users" });

export { api, token };
