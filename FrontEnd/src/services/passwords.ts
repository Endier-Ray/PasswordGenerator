const apiUrl = import.meta.env.PUBLIC_API_URL || "http://localhost:8000";

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
        const response = await fetch(`${apiUrl}/passwords/generate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        });

        const data: PasswordResponse = await response.json();

        if (!response.ok) {
            throw new Error(data.detail ?? "Failed to generate password");
        }

        return data.password ?? "";
    }
    