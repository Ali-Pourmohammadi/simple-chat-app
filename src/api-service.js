import supabase from "./supabase";

const fetchMessages = async () => {
  try {
    const { data: messages, error } = await supabase
      .from('messages')
      .select('*');

    if (error) {
      throw error;
    }

    return {messages , error};
  } catch (error) {
    console.error('Error fetching messages:', error.message);
    return null; // or handle error as needed
  }
};

export default fetchMessages;

export const createMessage = async (text) => {
  const { error } = await supabase
    .from('messages')
    .insert([{ text }])
    .select();

  if (error) {
    throw new Error(error.message);
  }
  
  return {error}
};
