export const getDriveImageUrl = (driveInput?: string): string => {
  if (!driveInput) return "";
  let id = driveInput;
  if (driveInput.includes("drive.google.com")) {
    const match = driveInput.match(/\/d\/(.+?)\/(view|edit)?/);
    id = match ? match[1] : driveInput;
  }
  const cleanId = id
    .replace("https://drive.google.com/file/d/", "")
    .split("/")[0]
    .split("?")[0];
  return `https://drive.google.com/thumbnail?id=${cleanId}&sz=w800`;
};

export const getDriveImageId = (id: string): string => {
  if (!id) return "";
  const cleanId = id
    .replace("https://drive.google.com/file/d/", "")
    .split("/")[0]
    .split("?")[0];
  return `https://drive.google.com/thumbnail?id=${cleanId}&sz=w800`;
};

const CACHE_EXPIRATION_MS = 10 * 60 * 1000;

const fetchDataAndCache = async (url: string, key: string, mapper: (cells: string[]) => any): Promise<any[]> => {
  try {
    const res = await fetch(`${url}&t=${Date.now()}`);
    if (!res.ok) throw new Error("Errore Google");
    const text = await res.text();
    const rows = text.split(/\r?\n/).map((row) => row.split(","));
    const freshData = rows
      .slice(1)
      .filter((r) => r.length > 1 && r[0].trim() !== "" && !r[0].includes(":"))
      .map((cells) => mapper(cells.map((c) => c.replace(/"/g, "").trim())));
    localStorage.setItem(key, JSON.stringify({ data: freshData, timestamp: Date.now() }));
    return freshData;
  } catch (err) {
    console.error("Errore durante il fetch del CSV:", err);
    return [];
  }
};

export const fetchWithSmartCache = async (url: string, cacheKey: string, mapper: (cells: string[]) => any): Promise<any[]> => {
  const now = Date.now();
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      if (now - timestamp < CACHE_EXPIRATION_MS) {
        console.log(`[Cache] Usando dati freschi per ${cacheKey}`);
        return data;
      }
      console.log(`[Cache] Dati scaduti per ${cacheKey}, aggiorno in background...`);
      fetchDataAndCache(url, cacheKey, mapper).catch(() => {});
      return data;
    } catch (e) {
      console.error("Errore parsing cache:", e);
    }
  }
  return await fetchDataAndCache(url, cacheKey, mapper);
};