import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.https://saypusayredgiebjtgmn.supabase.co;
const supabaseKey = process.env.sb_publishable_o0zukR07VkIV4AGONaXfqA_hziFBTr4;

export const createClient = () =>
  createBrowserClient(
    supabaseUrl!,
    supabaseKey!,
  );