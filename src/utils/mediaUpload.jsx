import { createClient } from "@supabase/supabase-js";

const url = "https://csrouxfjkciufqpqulod.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzcm91eGZqa2NpdWZxcHF1bG9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzNDU4NzMsImV4cCI6MjA2ODkyMTg3M30.PncKhwrtrOfnqjrXqSpWKJ4DakX6mGBojH1h465HNrA"; // It's safe only if this is anon/public and not service role!
const supabase = createClient(url, key);

export default function mediaUpload(file) {
    return new Promise(async (resolve, reject) => {
        if (!file) return reject("No file selected");

        try {
            const timeStamp = Date.now();
            const newName = `${timeStamp}_${file.name}`;

            const { error: uploadError } = await supabase.storage
                .from("images")
                .upload(newName, file, {
                    cacheControl: "3600",
                    upsert: false,
                });

            if (uploadError) {
                console.error(uploadError);
                return reject("Upload failed");
            }

            const { data } = supabase.storage.from("images").getPublicUrl(newName);
            resolve(data.publicUrl);
        } catch (err) {
            console.error(err);
            reject("Supabase upload failed");
        }
    });
}
