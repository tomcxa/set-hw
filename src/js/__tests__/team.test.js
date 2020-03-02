import Bowman from '../characters/Bowman';
import Daemon from '../characters/Daemon';
import Magician from '../characters/Magician';
import Swordsman from '../characters/Swordsman';
import Zombie from '../characters/Zombie';
import Undead from '../characters/Undead';
import Team from '../characters/Team';


describe('Тестим тиму', () => {
    test('Проверка Team.add()', () => {
        const bowman = new Bowman('Лучара');
        const team = new Team();
        team.add(bowman);
        const result = team.toArray();
        const expected = [bowman];

        expect(result).toEqual(expected);

        expect(() => {
            team.add(bowman);
        }).toThrow();
    });
    test('Проверка Team.addAll()', () => {
        const team = new Team();
        team.addAll();
        const result = team.toArray();
        const expected = [
            new Bowman('Лучара'),
            new Daemon('Демонюга'),
            new Magician('Ватный'),
            new Swordsman('Вар'),
            new Zombie('Ходячий Мертвяк'),
            new Undead('Мертвячий Ходяк'),
        ];

        expect(result).toEqual(expected);
    });
});
