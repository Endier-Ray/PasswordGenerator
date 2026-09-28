const localApiUrl = "http://localhost:8000";
const apiUrl = import.meta.env.PUBLIC_API_URL || localApiUrl;

export interface PasswordOptions {
    length:number;
    uppercase:boolean;
    lowercase:boolean;
    numbers:boolean;
    symbols:boolean;
}

export interface PasswordResponse {
    password?: string;
    detail?: string;
}

export async function generatePassword(
    options: PasswordOptions): Promise<string> {
        const request = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        };

        let response: Response;
        try {
            response = await fetch(`${apiUrl}/passwords/generate`, request);
        } catch (error) {
            if (!(["localhost", "127.0.0.1"].includes(window.location.hostname)) || apiUrl === localApiUrl) {
                throw error;
            }
            response = await fetch(`${localApiUrl}/passwords/generate`, request);
        }

        const data: PasswordResponse = await response.json();

        if (!response.ok) {
            throw new Error(data.detail ?? "Failed to generate password");
        }

        return data.password ?? "";
    }
    