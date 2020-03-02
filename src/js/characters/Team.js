import Bowman from './Bowman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Zombie from './Zombie';
import Undead from './Undead';

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Персонаж уже в команде!');
        }
        this.members.add(character);
    }

    addAll() {
        const allCharacters = [
            new Bowman('Лучара'),
            new Daemon('Демонюга'),
            new Magician('Ватный'),
            new Swordsman('Вар'),
            new Zombie('Ходячий Мертвяк'),
            new Undead('Мертвячий Ходяк'),
        ];
        allCharacters.forEach((character) => this.members.add(character));
    }

    toArray() {
        return [...this.members];
    }
}
