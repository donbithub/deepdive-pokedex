# deepdive-pokedex

## Reflectie & Leerpunten

| **Verbeterpunten**             | **Goed gedaan**             | **Reflectie**                                                                 | **README aanvulling** |
|--------------------------------|-----------------------------|-------------------------------------------------------------------------------|------------------------|
| Taakverdeling                  | Goed gepresenteerd          | Don → Emre: Mooi JS geschreven                                                | Heldere taakverdeling verbeteren voor efficiëntie. |
| GitHub                         | Unieke design               | Adam → Yasin: Integratie API                                                  | Beter gebruik van GitHub voor versiebeheer en samenwerking. |
| Communicatie                   | Goed tempo                  | Emre → Efe: Initiatief taakverdeling                                          | Meer structuur in communicatie aanbrengen. |
| Scrum (Stand-ups)              | Goede voorbereiding         | Efe → Don: Detail pagina creatief                                             | Dagelijkse korte stand-ups invoeren. |
| Frameworks afstemmen           | Iedereen aanwezig           | Yasin → Adam: Mooi design                                                     | Frameworks beter vooraf afstemmen. |
| Site cohesie                   | Goede samenwerking          | Efe → Emre: Leesbare code                                                     | Meer aandacht aan siteconsistentie. |
| JavaScript samenwerking        | Responsive site             | Don → Efe: Goeie planning                                                     | Samenwerking in JS verbeteren. |
| Presentatie voorbereiden        | Battle Arena (extra)        | Adam → Don: Goed zelfstandig gewerkt                                          | Presentaties beter voorbereiden. |
| Code opmaak (Linter issues)    | PokeAPI goed benut          | Don → Yasin: Initiatief genomen                                               | Strikte lintingregels toepassen. |
| API samenwerking               | Website logistiek           | Emre → Adam: Leesbare HTML <br> Adam → Efe: Samenwerking index                | API-integratie verder verbeteren. |


# deepdive-detailspage

| User Story                                                                                                                                                | Priority | Estimated Time |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------- |
| As a user I want a visually appealing Pokédex details page.                                                                                               | High     | 10 hours       |
| As a user I want the Pokémon's statistics to be easy to read and well structured.                                                                         | Medium   | 2 hours        |
| As a user I want the data to be displayed in a timely manner, including name, index, picture, evolutions, base stats, type, weaknesses, and profile data. | High     | 3 hours        |
| As a user I want to quickly switch between Pokémon (next/previous navigation) without going back to the list.                                             | Medium   | 3 hours        |
| As a user I want the details page to be responsive so I can view it comfortably on mobile, tablet, or desktop.                                            | Medium   | 2 hours        |
| As a user I want the details page to load smoothly with loading indicators.                                                                               | Low      | 1 hour         |

| Tijd | Di 9-11         | Di 11-13        | Di 13-15        | Di 15-17        | Wo 9-11         | Wo 11-13        | Wo 13-14 | Wo 15-17       | Do 9-11        | Do 11-13       | Do 13-15       | Do 15-17                        |
| ---- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | -------- | -------------- | -------------- | -------------- | -------------- | ------------------------------- |
| Don  | Story 1 (H,10h) | Story 1 (H,10h) | Story 1 (H,10h) | Story 1 (H,10h) | Story 1 (H,10h) | Story 1 (H,10h) | Story 1  | Story 2 (M,2h) | Story 3 (H,3h) | Story 3 (H,3h) | Story 4 (M,3h) | Story 5 (M,2h) + Story 6 (L,1h) |

# Tasks

### Story 1: _Visually appealing Pokédex details page_ (High, 10h)

- [x] **All tasks finished for Story 1**

- [x] Design overall layout (grid: image vs. data panel)

- [x] Implement Pokedex red “framing” border style

- [x] Add background behind Pokémon image matching type color

- [x] Add title panel (name with angled clipped background)

- [x] Apply consistent typography (headings, table text, etc.)

- [x] Style buttons and type badges (old school / 8-bit)

- [x] Add shadows and subtle effects (book-like appearance)

- [x] Polish color scheme to match Pokédex aesthetic

- [x] Fix padding & responsiveness

---

### Story 2: _Pokémon statistics easy to read & structured_ (Medium, 2h)

- [x] **All tasks finished for Story 2**

- [x] Create Profile table (species, abilities, gender ratio, etc.)

- [x] Create Base Stats table (HP, Attack, etc.)

- [x] Ensure table uses spacing, borders, and bold headings

- [x] Test readability on mobile/desktop

---

### Story 3: _Data displayed in timely manner_ (High, 3h)

- [ ] **All tasks finished for Story 3**

- [x] Fetch random Pokémon from PokéAPI

- [x] Populate name, ID, and sprite dynamically

- [x] Populate types (with color-coded badges)

- [x] Populate profile table with API data

- [x] Populate base stats table with API data

- [ ] Show weaknesses (via type relations endpoint)

- [x] Show evolutions (via evolution chain endpoint)

---

### Story 4: _Quickly switch between Pokémon_ (Medium, 3h)

- **All tasks finished for Story 4**

- [x] Add “Next” and “Previous” buttons under Pokémon details

- [x] Update fetch logic to move between Pokémon IDs

- [ ] Ensure data refreshes without reloading page

- [x] Animate transitions between Pokémon

---

### Story 5: _Responsive details page_ (Medium, 2h)

- [x] **All tasks finished for Story 5**

- [x] Implement responsive grid (`col-span-x` for breakpoints)

- [x] Stack panels on mobile, side-by-side on desktop

- [x] Test on different screen sizes

- [x] Adjust font sizes per breakpoint

- [x] Adjust spacing per breakpoint

---

### Story 6: _Smooth loading with indicators_ (Low, 1h)

- [ ] **All tasks finished for Story 6**

- [x] Add loading spinner or Pokéball animation

- [ ] Show loading state while fetching data

- [ ] Hide loading state when data is ready

# deepdive-indexpage

| User Story                                                                                                   | Priority | Estimated Time |
| ------------------------------------------------------------------------------------------------------------ | -------- | -------------- |
| As a user I want a appealing index page that looks clean and attracts users.                                 | High     | 9 hours        |
| As a user I want to have a search bar, so you can search Pokémon's.                                          | Medium   | 2 hours        |
| As a user I want a battle arena that Pokémon's can fight, that you can select on the front page.             | High     | 6 hours        |
| As a user I want the Pokémon picture, name and element to be displayed.                                      | Medium   | 3 hour         |
| As a user I want the index page to have a load more button, so you can see more Pokémon's.                   | Medium   | 3 hours        |
| As a user I want the index page to be responsive so I can view it comfortably on mobile, tablet, or desktop. | Low      | 1 hours        |

| Tijd      | Di 9-12         | Di 12-15        | Di 15-17        | Wo 9-11         | Wo 11-12        | Wo 12-14        | Wo 14-15 | Wo 15-17       | Do 9-12        | Do 12-14       | Do 14-17       |                                 |
| --------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | -------- | -------------- | -------------- | -------------- | -------------- | ------------------------------- |
| Persoon 1 | Story 1 (H,10h) | Story 1 (H,10h) | Story 1 (H,10h) | Story 1 (H,10h) | Story 1 (H,10h) | Story 1 (H,10h) | Story 1  | Story 2 (M,2h) | Story 3 (H,3h) | Story 3 (H,3h) | Story 4 (M,3h) | Story 5 (M,2h) + Story 6 (L,1h) |
