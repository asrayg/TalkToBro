interface Message {
  id: number;
  amISender: boolean;
  text: string;
}

export const conversationMessages: Message[] = [
  { id: 1, amISender: true, text: "Olá, como vai?" },
  { id: 2, amISender: false, text: "Estou bem, obrigado! E você?" },
  { id: 3, amISender: true, text: "Tudo bem por aqui também, obrigado!" },
  { id: 4, amISender: false, text: "Ótimo saber!" },
  { id: 5, amISender: true, text: "Está fazendo algo interessante hoje?" },
  { id: 6, amISender: false, text: "Não, só relaxando em casa. E você?" },
  {
    id: 7,
    amISender: true,
    text: "Eu estou trabalhando em um projeto pessoal.",
  },
  {
    id: 8,
    amISender: false,
    text: "Que legal! Qual projeto você está trabalhando?",
  },
  {
    id: 9,
    amISender: true,
    text: "É um aplicativo de gerenciamento de tarefas.",
  },
  {
    id: 10,
    amISender: false,
    text: "Interessante! Espero que seja um sucesso.",
  },
  {
    id: 11,
    amISender: true,
    text: "Obrigado! Estou trabalhando duro para isso.",
  },
  { id: 12, amISender: false, text: "Eu acredito em você!" },
  {
    id: 13,
    amISender: true,
    text: "Vamos sair para tomar um café algum dia desses?",
  },
  { id: 14, amISender: false, text: "Claro, adoraria!" },
  {
    id: 15,
    amISender: true,
    text: "Perfeito! Vou te enviar uma mensagem para marcarmos.",
  },
  { id: 16, amISender: false, text: "Estou ansioso por isso!" },
  { id: 17, amISender: true, text: "Eu também!" },
  { id: 18, amISender: false, text: "Nos vemos em breve então." },
  { id: 19, amISender: true, text: "Até logo!" },
  { id: 20, amISender: false, text: "Até logo!" },
];

export const messagesArray = [
  {
    id: "1",
    name: "Feelings Bro",
    message:
      "Talk to feelings bro if you're down 😞.",
    time: "9:45 AM",
    avatar: require("@/assets/1.png"),
  },
  {
    id: "2",
    name: "Questions Bro",
    message:
      "Nice. I don't know why people get all worked up about hawaiian pizza. I ...",
    time: "10:30 AM",
    avatar: require("@/assets/2.png"),
  },
  {
    id: "3",
    name: "Hype Bro",
    message:
      "(Sad fact: you cannot search for a gif of the word “gif”, just gives you gifs.)",
    time: "11:15 AM",
    avatar: require("@/assets/3.png"),
  },
  {
    id: "4",
    name: "Talk Shit Bro",
    message: "Maybe email isn't the best form of communication.",
    time: "12:00 PM",
    avatar: require("@/assets/4.png"),
  },
  {
    id: "5",
    name: "Creative Bro",
    message:
      "Tabs make way more sense than spaces. Convince me I'm wrong. LOL.",
    time: "1:00 PM",
    avatar: require("@/assets/5.png"),
  },
  {
    id: "6",
    name: "Therapy Bro",
    message: "That's what I'm talking about!",
    time: "2:00 PM",
    avatar: require("@/assets/6.png"),
  },
];
