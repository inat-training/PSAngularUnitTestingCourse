import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe(('HeroComponent'), () => {

    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderDude', strength: 8},
            {id: 2, name: 'Wonderful Woman', strength: 24},
            {id: 3, name: 'SuperDude', strength: 55}
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes','getHeroNo404', 
        'addHero', 'deleteHero', 'searchHeroes']);

        component = new HeroesComponent(mockHeroService);
    })

    it('should remove the indicated hero from the heroes list', () => {
        mockHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.delete(HEROES[2]);

        expect(component.heroes.length).toBe(2);
    })

    it('should call deleteHero with the correct hero', () => {
        mockHeroService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.delete(HEROES[2]);

        expect(mockHeroService.deleteHero).toHaveBeenCalledOnceWith(HEROES[2]);
    })
})