import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const dataBase: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    image: "https://i.pinimg.com/736x/51/b4/29/51b42969a1274896c5d1e18656ec9222.jpg",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    image: "https://th.bing.com/th/id/R.54cac61c0e17a0056f67d7846b5fbea7?rik=xxEmdIflOsZ69w&pid=ImgRaw&r=0",
    statistics: {
      Overall: 92,
      Pace: 89,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 78,
    },
  },
  {
    id: 3,
    name: "Robert Lewandowski",
    club: "Bayern Munich",
    nationality: "Poland",
    position: "Forward",
    image: "https://wallpaperaccess.com/full/1483515.jpg",
    statistics: {
      Overall: 91,
      Pace: 80,
      Shooting: 92,
      Passing: 78,
      Dribbling: 83,
      Defending: 40,
      Physical: 84,
    },
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    image: "https://th.bing.com/th/id/OIP.FvwRiuQCaMK_t24nbIetiAHaNK?w=184&h=328&c=7&r=0&o=7&pid=1.7&rm=3",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 85,
      Passing: 92,
      Dribbling: 87,
      Defending: 62,
      Physical: 79,
    },
  },
  {
    id: 5,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    image: "https://tse2.mm.bing.net/th/id/OIP.lK0dJuSf7ZdQmIwMHIXaHwHaFL?rs=1&pid=ImgDetMain&o=7&rm=3",
    statistics: {
      Overall: 90,
      Pace: 96,
      Shooting: 86,
      Passing: 79,
      Dribbling: 91,
      Defending: 39,
      Physical: 76,
    },
  },
  {
    id: 6,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    image: "https://i.pinimg.com/736x/51/b4/29/51b42969a1274896c5d1e18656ec9222.jpg",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 7,
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    nationality: "Portugal",
    position: "Forward",
    image: "https://th.bing.com/th/id/R.54cac61c0e17a0056f67d7846b5fbea7?rik=xxEmdIflOsZ69w&pid=ImgRaw&r=0",
    statistics: {
      Overall: 92,
      Pace: 89,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 78,
    },
  },
  {
    id: 8,
    name: "Robert Lewandowski",
    club: "Bayern Munich",
    nationality: "Poland",
    position: "Forward",
    image: "https://wallpaperaccess.com/full/1483515.jpg",
    statistics: {
      Overall: 91,
      Pace: 80,
      Shooting: 92,
      Passing: 78,
      Dribbling: 83,
      Defending: 40,
      Physical: 84,
    },
  },
  {
    id: 9,
    name: "Erling Haaland",
    club: "Borussia Dortmund",
    nationality: "Norway",
    position: "Forward",
    image: "https://i.pinimg.com/736x/b3/46/4a/b3464a1a63e745d66a8c6d02ac578582.jpg",
    statistics: {
      Overall: 89,
      Pace: 88,
      Shooting: 90,
      Passing: 75,
      Dribbling: 81,
      Defending: 32,
      Physical: 89,
    },
  },
  {
    id: 10,
    name: "Neymar Jr.",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    image: "https://tse1.mm.bing.net/th/id/OIP.j_WoHHUEO3Jj3talWEhp6QHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    statistics: {
      Overall: 91,
      Pace: 92,
      Shooting: 84,
      Passing: 88,
      Dribbling: 95,
      Defending: 38,
      Physical: 72,
    },
  },
  {
    id: 11,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    image: "https://tse2.mm.bing.net/th/id/OIP.REEn7IMaIgcng_oaKNl8LQHaHk?rs=1&pid=ImgDetMain&o=7&rm=3",
    statistics: {
      Overall: 90,
      Pace: 94,
      Shooting: 87,
      Passing: 81,
      Dribbling: 89,
      Defending: 45,
      Physical: 75,
    },
  },
  {
    id: 12,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    image: "https://tse4.mm.bing.net/th/id/OIP.128jIsYyiclolexoRaOz0gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    statistics: {
      Overall: 89,
      Pace: 77,
      Shooting: 60,
      Passing: 78,
      Dribbling: 70,
      Defending: 90,
      Physical: 92,
    },
  },
  {
    id: 13,
    name: "Sadio Mané",
    club: "Liverpool",
    nationality: "Senegal",
    position: "Forward",
    image: "https://vignette.wikia.nocookie.net/liverpoolfc/images/b/bc/SMane2019.jpeg/revision/latest?cb=20190807042616",
    statistics: {
      Overall: 88,
      Pace: 95,
      Shooting: 85,
      Passing: 78,
      Dribbling: 90,
      Defending: 45,
      Physical: 78,
    },
  },
  {
    id: 14,
    name: "Trent Alexander-Arnold",
    club: "Liverpool",
    nationality: "England",
    position: "Defender",
    image: "https://tse2.mm.bing.net/th/id/OIP.NIlLmiWfqX6DJzTZ9EToRAHaNK?rs=1&pid=ImgDetMain&o=7&rm=3",
    statistics: {
      Overall: 87,
      Pace: 84,
      Shooting: 70,
      Passing: 86,
      Dribbling: 82,
      Defending: 85,
      Physical: 77,
    },
  },
  {
    id: 15,
    name: "Alisson Becker",
    club: "Liverpool",
    nationality: "Brazil",
    position: "Goalkeeper",
    image: "https://i.pinimg.com/originals/d6/11/ae/d611ae93d9fcb89ae04c05c53e913a64.jpg",
    statistics: {
      Overall: 89,
      Pace: 84,
      Shooting: 85,
      Passing: 86,
      Dribbling: 48,
      Defending: 90,
      Physical: 77,
    },
  },
  {
    id: 16,
    name: "Frenkie de Jong",
    club: "Barcelona",
    nationality: "Netherlands",
    position: "Midfielder",
    image: "https://e1.pxfuel.com/desktop-wallpaper/764/255/desktop-wallpaper-frenkie-de-jong-by-nicolo69-de-jong.jpg",
    statistics: {
      Overall: 88,
      Pace: 78,
      Shooting: 76,
      Passing: 89,
      Dribbling: 88,
      Defending: 80,
      Physical: 82,
    },
  },
  {
    id: 17,
    name: "Raheem Sterling",
    club: "Manchester City",
    nationality: "England",
    position: "Forward",
    image: "https://tse4.mm.bing.net/th/id/OIP.MrMjl_fv1vnR-Nq-uVtCPQHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
    statistics: {
      Overall: 87,
      Pace: 93,
      Shooting: 82,
      Passing: 79,
      Dribbling: 90,
      Defending: 40,
      Physical: 77,
    },
  },
  {
    id: 18,
    name: "Zlatan Ibrahimović",
    club: "AC Milan",
    nationality: "Sweden",
    position: "Forward",
    image: "https://tse1.mm.bing.net/th/id/OIP.kTzBsN1-0lP79_YBPthVQAHaFU?rs=1&pid=ImgDetMain&o=7&rm=3",
    statistics: {
      Overall: 89,
      Pace: 81,
      Shooting: 92,
      Passing: 85,
      Dribbling: 86,
      Defending: 40,
      Physical: 88,
    },
  },
  {
    id: 19,
    name: "David Beckham",
    club: "Retired",
    nationality: "England",
    position: "Midfielder",
    image: "https://tse1.mm.bing.net/th/id/OIP.oDZW2TIp1K1819O6a5VY2wHaJP?rs=1&pid=ImgDetMain&o=7&rm=3",
    statistics: {
      Overall: 85,
      Pace: 76,
      Shooting: 82,
      Passing: 90,
      Dribbling: 84,
      Defending: 70,
      Physical: 72,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return dataBase;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return dataBase.find((player) => player.id === id);
};
 
export const insertPlayer = async (player: PlayerModel) => {
    dataBase.push(player);
};

export const deleteOnePlayer = async (id: number) => {
    const index = dataBase.findIndex((player) => player.id === id);

    if(index !== -1) {
        dataBase.splice(index, 1);  
        return true;
    }
    return false;
};

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {

    const playerIndex = dataBase.findIndex((player) => player.id == id);
    
    if(playerIndex !== -1 ){
        dataBase[playerIndex].statistics = statistics;
    }
    return dataBase[playerIndex];
}


