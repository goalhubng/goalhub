const allTeams = [
  // PREMIER LEAGUE - 20
  {name: "Arsenal", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/330px-Arsenal_FC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Aston Villa", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Aston_Villa_FC_new_crest.svg/330px-Aston_Villa_FC_new_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Bournemouth", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/330px-AFC_Bournemouth_%282013%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Brentford", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/330px-Brentford_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Brighton", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Brighton_and_Hove_Albion_FC_crest.svg/330px-Brighton_and_Hove_Albion_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Burnley", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Burnley_FC_Logo.svg/330px-Burnley_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Chelsea", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/330px-Chelsea_FC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Crystal Palace", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Crystal_Palace_FC_logo_%282022%29.svg/330px-Crystal_Palace_FC_logo_%282022%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Everton", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/330px-Everton_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fulham", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Fulham_FC_%28shield%29.svg/330px-Fulham_FC_%28shield%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Liverpool", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/330px-Liverpool_FC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Luton Town", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Luton_Town_logo.svg/330px-Luton_Town_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Manchester City", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/330px-Manchester_City_FC_badge.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Manchester United", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/330px-Manchester_United_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Newcastle United", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Newcastle_United_Logo.svg/330px-Newcastle_United_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Nottingham Forest", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/330px-Nottingham_Forest_F.C._logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sheffield United", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Sheffield_United_FC_logo.svg/330px-Sheffield_United_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Tottenham Hotspur", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/330px-Tottenham_Hotspur.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "West Ham", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/West_Ham_United_FC_logo.svg/330px-West_Ham_United_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Wolves", league: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Wolverhampton_Wanderers_FC_crest.svg/330px-Wolverhampton_Wanderers_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // LA LIGA - 20
  {name: "Alaves", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Deportivo_Alaves_logo_%282020%29.svg/330px-Deportivo_Alaves_logo_%282020%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Athletic Bilbao", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Club_Athletic_Bilbao_logo.svg/330px-Club_Athletic_Bilbao_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Atletico Madrid", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Atletico_Madrid_Logo_2024.svg/330px-Atletico_Madrid_Logo_2024.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Barcelona", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/330px-FC_Barcelona_%28crest%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Betis", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Real_Betis_2022_logo.svg/330px-Real_Betis_2022_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Cadiz", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/C%C3%A1diz_CF_logo.svg/330px-C%C3%A1diz_CF_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Celta Vigo", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/RC_Celta_de_Vigo_logo.svg/330px-RC_Celta_de_Vigo_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Getafe", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Getafe_logo.svg/330px-Getafe_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Girona", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Girona_FC_Logo.svg/330px-Girona_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Granada", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Logo_of_Granada_Club_de_F%C3%BAtbol.svg/330px-Logo_of_Granada_Club_de_F%C3%BAtbol.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Las Palmas", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/UD_Las_Palmas_logo.svg/330px-UD_Las_Palmas_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Mallorca", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Rcd_mallorca.svg/330px-Rcd_mallorca.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Osasuna", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/CA_Osasuna_2024_crest.svg/330px-CA_Osasuna_2024_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Rayo Vallecano", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Rayo_Vallecano_logo.svg/330px-Rayo_Vallecano_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Real Madrid", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/330px-Real_Madrid_CF.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Real Sociedad", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Real_Sociedad_logo.svg/330px-Real_Sociedad_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sevilla", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Sevilla_FC_logo.svg/330px-Sevilla_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Valencia", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/330px-Valenciacf.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Villarreal", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Villarreal_CF_logo-en.svg/330px-Villarreal_CF_logo-en.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Almeria", league: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/UD_Almeria_logo.svg/330px-UD_Almeria_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // SERIE A - 20
  {name: "AC Milan", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/330px-Logo_of_AC_Milan.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Inter Milan", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/330px-FC_Internazionale_Milano_2021.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Juventus", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Juventus_FC_-_logo_black_%28Italy%2C_2020%29.svg/330px-Juventus_FC_-_logo_black_%28Italy%2C_2020%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "AS Roma", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/330px-AS_Roma_logo_%282017%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Napoli", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/SSC_Napoli_2025_%28white_and_azure%29.svg/330px-SSC_Napoli_2025_%28white_and_azure%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Atalanta", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Atalanta_BC_new_logo.svg/330px-Atalanta_BC_new_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Bologna", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bologna_F.C._1909_logo.svg/330px-Bologna_F.C._1909_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fiorentina", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ACF_Fiorentina_-_logo_%28Italy%2C_2022%29.svg/330px-ACF_Fiorentina_-_logo_%28Italy%2C_2022%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Lazio", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/S.S._Lazio_badge.svg/330px-S.S._Lazio_badge.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Monza", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/AC_Monza_logo_%282021%29.svg/330px-AC_Monza_logo_%282021%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Genoa", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Genoa_CFC_crest.svg/330px-Genoa_CFC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Torino", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Torino_FC_Logo.svg/330px-Torino_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Udinese", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Udinese_Calcio_logo.svg/330px-Udinese_Calcio_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sassuolo", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/US_Sassuolo_Calcio_logo.svg/330px-US_Sassuolo_Calcio_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Empoli", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Empoli_FC_crest.svg/330px-Empoli_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Lecce", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/US_Lecce_crest.svg/330px-US_Lecce_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Cagliari", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Cagliari_Calcio_1920.svg/330px-Cagliari_Calcio_1920.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Verona", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Hellas_Verona_FC_logo_%282020%29.svg/330px-Hellas_Verona_FC_logo_%282020%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Frosinone", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/0/0b/Frosinone_Calcio_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Salernitana", league: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/US_Salernitana_1919_logo.svg/330px-US_Salernitana_1919_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // LIGUE 1 - 18
  {name: "Paris Saint-Germain", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/330px-Paris_Saint-Germain_F.C..svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Marseille", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/1/14/Olympique_de_Marseille_logo.svg"},
  {name: "Lyon", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Olympique_Lyonnais_logo.svg/330px-Olympique_Lyonnais_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Monaco", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/LogoASMonacoFC2021.svg/330px-LogoASMonacoFC2021.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Lille", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/4/44/Lille_OSC_logo.svg"},
  {name: "Nice", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/OGC_Nice_logo.svg/330px-OGC_Nice_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Rennes", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Stade_Rennais_FC_logo.svg"},
  {name: "Lens", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/RC_Lens_logo.svg/330px-RC_Lens_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Toulouse", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Toulouse_FC_logo.svg"},
  {name: "Strasbourg", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Racing_Club_de_Strasbourg_logo.svg/330px-Racing_Club_de_Strasbourg_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Reims", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Stade_de_Reims_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Le Havre", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Le_Havre_AC_logo.svg/330px-Le_Havre_AC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Montpellier", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/a/a8/Montpellier_HSC_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Nantes", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logo_FC_Nantes_%28avec_fond%29_-_2019.svg/330px-Logo_FC_Nantes_%28avec_fond%29_-_2019.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Metz", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/FC_Metz_2021_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Clermont", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/5/52/Clermont_Foot_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Lorient", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/FC_Lorient_logo.svg/330px-FC_Lorient_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Brest", league: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Stade_Brestois_29_logo.svg/330px-Stade_Brestois_29_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // SAUDI PRO - 18
  {name: "Al Hilal", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Al_Hilal_SFC_Logo.svg/330px-Al_Hilal_SFC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Nassr", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nassr_FC_Logo.svg/330px-Nassr_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Ittihad", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Al-Ittihad_Club_%28Jeddah%29_logo.svg/330px-Al-Ittihad_Club_%28Jeddah%29_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Ahli", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Al_Ahli_Saudi_FC_logo.svg/330px-Al_Ahli_Saudi_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Shabab", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Al_Shabab_FC_logo.svg"},
  {name: "Al Taawoun", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Al_Taawoun_FC_Logo.svg/330px-Al_Taawoun_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Fateh", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Al_Fateh_SC_Logo.svg/330px-Al_Fateh_SC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Ettifaq", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Al-Ettifaq_FC_logo.svg/330px-Al-Ettifaq_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Feiha", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Al-Fayha_FC.svg/330px-Al-Fayha_FC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Khaleej", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Al-Khaleej_FC_Logo.svg/330px-Al-Khaleej_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Raed", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Al_Raed_FC.svg/330px-Al_Raed_FC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Hazm", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Al-Hazem_FC_Logo.svg/330px-Al-Hazem_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Tai", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Al-Tai_FC_Logo.svg/330px-Al-Tai_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Wehda", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Al_Wehda_FC_logo.svg"},
  {name: "Abha", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Abha_Club_Logo.svg/330px-Abha_Club_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Damac", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Damac_FC_Logo.svg/330px-Damac_FC_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Al Akhdoud", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/Al_Akhdoud_Club_logo.png"},
  {name: "Al Riyadh", league: "Saudi Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Al-Riyadh_SC.svg/330px-Al-Riyadh_SC.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // BUNDESLIGA - 18
  {name: "Bayern Munich", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg/330px-FC_Bayern_M%C3%BCnchen_logo_%282024%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Borussia Dortmund", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/330px-Borussia_Dortmund_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "RB Leipzig", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/330px-RB_Leipzig_2014_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Bayer Leverkusen", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/330px-Bayer_04_Leverkusen_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Eintracht Frankfurt", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Eintracht_Frankfurt_crest.svg/330px-Eintracht_Frankfurt_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "VfL Wolfsburg", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/VfL_Wolfsburg_logo_2026.svg/330px-VfL_Wolfsburg_logo_2026.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Borussia Monchengladbach", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Borussia_M%C3%B6nchengladbach_logo.svg/330px-Borussia_M%C3%B6nchengladbach_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "SC Freiburg", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/SC_Freiburg_logo.svg/330px-SC_Freiburg_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Union Berlin", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/1._FC_Union_Berlin_Logo.svg/330px-1._FC_Union_Berlin_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Mainz 05", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/1._FSV_Mainz_05_logo.svg/330px-1._FSV_Mainz_05_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "FC Koln", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/1._FC_Koeln_Logo_2014%E2%80%93.svg/330px-1._FC_Koeln_Logo_2014%E2%80%93.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Hoffenheim", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/330px-Logo_TSG_Hoffenheim.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Werder Bremen", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "VfB Stuttgart", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/VfB_Stuttgart_1893_Logo.svg/330px-VfB_Stuttgart_1893_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Augsburg", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/FC_Augsburg_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "VfL Bochum", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/VfL_Bochum_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Heidenheim", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/e/e1/1._FC_Heidenheim_1846_logo.svg"},
  {name: "St. Pauli", league: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/en/8/81/FC_St._Pauli_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},

  // EREDIVISIE - 18
  {name: "Ajax", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_AFC_Ajax_%281928-1991%2C_2025-%29.png/330px-Logo_AFC_Ajax_%281928-1991%2C_2025-%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "PSV Eindhoven", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/0/05/PSV_Eindhoven.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Feyenoord", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Feyenoord_logo_since_2024.svg/330px-Feyenoord_logo_since_2024.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "AZ Alkmaar", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/AZ_Alkmaar.svg/330px-AZ_Alkmaar.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "FC Twente", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/FC_Twente.svg/330px-FC_Twente.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "FC Utrecht", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo_FC_Utrecht.svg/330px-Logo_FC_Utrecht.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sparta Rotterdam", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Sparta_Rotterdam_logo.svg/330px-Sparta_Rotterdam_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "NEC Nijmegen", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/NEC_Nijmegen_logo.svg/330px-NEC_Nijmegen_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Go Ahead Eagles", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Go_Ahead_Eagles_logo.svg/330px-Go_Ahead_Eagles_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Heerenveen", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/SC_Heerenveen_logo.svg/330px-SC_Heerenveen_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "PEC Zwolle", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/PEC_Zwolle_logo.svg/330px-PEC_Zwolle_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fortuna Sittard", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Fortuna_Sittard_Logo.svg/330px-Fortuna_Sittard_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "RKC Waalwijk", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/RKC_Waalwijk_logo.svg/330px-RKC_Waalwijk_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Willem II", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/Willem_II_(football_club)_logo.svg"},
  {name: "Almere City", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/Almere_City_FC_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "NAC Breda", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_NAC_Breda.svg/330px-Logo_NAC_Breda.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Excelsior", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Excelsior_Rotterdam_logo_2021.svg/330px-Excelsior_Rotterdam_logo_2021.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Volendam", league: "Eredivisie", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/FC_Volendam_logo.png/330px-FC_Volendam_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // PRIMEIRA LIGA - 18
  {name: "Benfica", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Porto", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/330px-FC_Porto.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sporting CP", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Sporting_Clube_de_Portugal_2026.svg/330px-Sporting_Clube_de_Portugal_2026.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Braga", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/S.C._Braga_logo.svg/330px-S.C._Braga_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Vitoria SC", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Vit%C3%B3ria_Guimar%C3%A3es.svg/330px-Vit%C3%B3ria_Guimar%C3%A3es.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Boavista", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Boavista_F.C._logo.svg/330px-Boavista_F.C._logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Famalicao", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/F.C._Famalic%C3%A3o_logo.svg/330px-F.C._Famalic%C3%A3o_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Estoril", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/GD_Estoril_Praia_logo.svg/330px-GD_Estoril_Praia_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Casa Pia", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Casa_Pia_A.C._logo.svg/330px-Casa_Pia_A.C._logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Rio Ave", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Rio_Ave_FC_logo.svg/330px-Rio_Ave_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Arouca", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/F.C._Arouca_logo.svg/330px-F.C._Arouca_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Moreirense", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Moreirense_Futebol_Clube_logo.svg/330px-Moreirense_Futebol_Clube_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Gil Vicente", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/Gil_Vicente_F.C.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Farense", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/S.C._Farense_logo.svg/330px-S.C._Farense_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Portimonense", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Portimonense_Sporting_Clube_logo.svg/330px-Portimonense_Sporting_Clube_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Estrela Amadora", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/S%C3%ADmbolo_Estrela_da_Amadora.svg/330px-S%C3%ADmbolo_Estrela_da_Amadora.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Nacional", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/C.D._Nacional_logo.svg/330px-C.D._Nacional_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "AVS", league: "Primeira Liga", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/AVS_Futebol_SAD_logo.svg/330px-AVS_Futebol_SAD_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // SUPER LIG - 20
  {name: "Galatasaray", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Galatasaray_S.K._Logo_2026_5-stars.svg/330px-Galatasaray_S.K._Logo_2026_5-stars.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fenerbahce", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/8/86/Fenerbahce_SK.svg"},
  {name: "Besiktas", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/Besiktas_JK.svg"},
  {name: "Trabzonspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Trabzonspor_Amblem.svg/330px-Trabzonspor_Amblem.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Basaksehir", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg/330px-%C4%B0stanbul_Ba%C5%9Fak%C5%9Fehir_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Sivasspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Sivasspor_logo.svg/330px-Sivasspor_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Alanyaspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Alanyaspor_logo.svg/330px-Alanyaspor_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Antalyaspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Antalyaspor_logo.svg/330px-Antalyaspor_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Kasimpasa", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Kasimpasa_logo.svg/330px-Kasimpasa_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Kayserispor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Kayserispor_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Konyaspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Konyaspor_logo.svg/330px-Konyaspor_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Gaziantep FK", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Gazi%C5%9Fehir_Gaziantep_logo.svg/330px-Gazi%C5%9Fehir_Gaziantep_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Rizespor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Logo_Rizespor.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Samsunspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/2/26/Samsunspor_logo.svg"},
  {name: "Adana Demirspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/d/d1/Adana_Demirspor_logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Fatih Karagumruk", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/e/ea/Fatih_Karag%C3%BCmr%C3%BCk_S.K..png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Hatayspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/f/fe/Hatayspor_crest.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Pendikspor", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Pendikspor.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Ankaragucu", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Ankaragucu_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Genclerbirligi", league: "Super Lig", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Gen%C3%A7lerbirli%C4%9Fi_S.K._crest.svg/330px-Gen%C3%A7lerbirli%C4%9Fi_S.K._crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // SCOTTISH PREMIERSHIP - 12
  {name: "Celtic", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/3/35/Celtic_FC.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Rangers", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Rangers_FC.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Aberdeen", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/8/82/Aberdeen_FC_crest.svg"},
  {name: "Hearts", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/6/61/Heart_of_Midlothian_FC_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Hibernian", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Hibernian_FC_Official_2026.svg/330px-Hibernian_FC_Official_2026.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Motherwell", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Motherwell_FC_crest.svg/330px-Motherwell_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Dundee United", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Dundee_United_FC_crest.svg/330px-Dundee_United_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "St Mirren", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/St_Mirren_FC_crest.svg/330px-St_Mirren_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Kilmarnock", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Kilmarnock_FC_crest.svg/330px-Kilmarnock_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Ross County", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Ross_County_FC_crest.svg/330px-Ross_County_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Dundee", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Dundee_FC_2025_Crest.svg/330px-Dundee_FC_2025_Crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "St Johnstone", league: "Scottish Prem", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/St_Johnstone_FC_crest.svg/330px-St_Johnstone_FC_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // RUSSIAN PREMIER LEAGUE - 16
  {name: "Zenit", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/FC_Zenit_Saint_Petersburg_crest.svg/330px-FC_Zenit_Saint_Petersburg_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Spartak Moscow", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/FC_Spartak_Moscow_crest.svg/330px-FC_Spartak_Moscow_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "CSKA Moscow", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/PFK_CSKA_Logo.svg/330px-PFK_CSKA_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Dynamo Moscow", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Dynamo_Moscow_logo.svg/330px-Dynamo_Moscow_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Lokomotiv Moscow", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/FC_Lokomotiv_Moscow_logo.svg/330px-FC_Lokomotiv_Moscow_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Krasnodar", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/FC_Krasnodar_logo.svg/330px-FC_Krasnodar_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Rubin Kazan", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/3/32/FC_Rubin_Kazan_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Rostov", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/FC_Rostov_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Akhmat Grozny", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/3/36/Akhmat_Grozny_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Krylia Sovetov", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/FC_Krylia_Sovetov_Samara_logo.svg"},
  {name: "Sochi", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/FC_Sochi_logo.svg"},
  {name: "Ural", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/FC_Ural_Yekaterinburg_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Nizhny Novgorod", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/8/85/FC_Nizhny_Novgorod_logo.svg"},
  {name: "Fakel Voronezh", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/FC_Fakel_Voronezh_logo.svg"},
  {name: "Baltika Kaliningrad", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/FC_Baltika_Kaliningrad_logo.svg"},
  {name: "Khimki", league: "Russian PL", logo: "https://upload.wikimedia.org/wikipedia/en/2/2b/FC_Khimki_logo.svg"},

  // BRASILEIRAO - 20
  {name: "Flamengo", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flamengo-RJ_%28BRA%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Palmeiras", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Sao Paulo", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/S%C3%A3o_Paulo_Futebol_Clube_logo_%282022%29.svg/330px-S%C3%A3o_Paulo_Futebol_Clube_logo_%282022%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Corinthians", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Sport_Club_Corinthians_Paulista_crest.svg/330px-Sport_Club_Corinthians_Paulista_crest.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Gremio", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gremio_logo.svg/330px-Gremio_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Internacional", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sport_Club_Internacional_logo.svg/330px-Sport_Club_Internacional_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Atletico Mineiro", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Logo_of_Clube_Atl%C3%A9tico_Mineiro.svg/330px-Logo_of_Clube_Atl%C3%A9tico_Mineiro.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fluminense", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fluminense_Football_Club.svg/330px-Fluminense_Football_Club.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Botafogo", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/330px-Botafogo_de_Futebol_e_Regatas_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Vasco da Gama", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Club_de_Regatas_Vasco_da_Gama_logo_%282021%29.svg/330px-Club_de_Regatas_Vasco_da_Gama_logo_%282021%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Cruzeiro", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/330px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Bahia", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Logo_of_Esporte_Clube_Bahia_%282004%29.svg/330px-Logo_of_Esporte_Clube_Bahia_%282004%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Fortaleza", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Fortaleza_Esporte_Clube_logo.png/330px-Fortaleza_Esporte_Clube_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Athletico Paranaense", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Athletico_Paranaense_%28Logo_2019%29.svg/330px-Athletico_Paranaense_%28Logo_2019%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Bragantino", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Red_Bull_Bragantino_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Criciuma", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/9/94/Criciúma_EC_logo.svg"},
  {name: "Cuiaba", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/9/9d/Cuiabá_EC_logo.svg"},
  {name: "Vitoria", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Esporte_Clube_Vitória_logo.svg"},
  {name: "Juventude", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Juventude_crest.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Atletico Goianiense", league: "Brasileirao", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Atl%C3%A9tico_Clube_Goianiense_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},

  // SUPER LEAGUE GREECE - 14
  {name: "Olympiacos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Olympiacos_FC_logo.svg"},
  {name: "Panathinaikos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/PAO_alt_logo.svg"},
  {name: "AEK Athens", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/AEK_Athens_FC_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "PAOK", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/e/e6/PAOK_FC_EMBLEM.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Aris", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Aris_Thessaloniki_F.C._logo.svg/330px-Aris_Thessaloniki_F.C._logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Asteras Tripolis", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Asteras_Tripolis_FC_logo.svg/330px-Asteras_Tripolis_FC_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Atromitos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/e/e9/Atromitos.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "OFI Crete", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/OFI_Crete_F.C._logo.svg/330px-OFI_Crete_F.C._logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Panetolikos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Panetolikos_new_emblem.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Volos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Volos_F.C._logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Lamia", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/PAS_Lamia_1964_logo.svg/330px-PAS_Lamia_1964_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Kifisia", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/9/9e/AO_Kifisia_F.C._logo.png"},
  {name: "Panserraikos", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/b/b0/Panseraikos_new_emblem.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Athens Kallithea", league: "Super League GR", logo: "https://upload.wikimedia.org/wikipedia/en/c/c3/Athens_Kallithea_FC_crest_%282022%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},

  // BELGIAN PRO LEAGUE - 16
  {name: "Club Brugge", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Club_brugge.png/330px-Club_brugge.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Anderlecht", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/RSC_Anderlecht_logo.svg"},
  {name: "Genk", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/0/03/KRC_Genk_logo.svg"},
  {name: "Union SG", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/1/11/Royale_Union_Saint-Gilloise_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Antwerp", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/6/61/Royal_Antwerp_FC_logo.svg"},
  {name: "Gent", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/KAA_Gent_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Standard Liege", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/8/85/Standard_de_Liège_logo.svg"},
  {name: "Charleroi", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/1/16/R._Charleroi_S.C._logo.svg"},
  {name: "Cercle Brugge", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/9/9a/Cercle_Brugge_K.S.V._logo.svg"},
  {name: "STVV", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/K._Sint-Truidense_V.V._logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"},
  {name: "Westerlo", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/KVC_Westerlo_logo.svg"},
  {name: "OH Leuven", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/OH_LEUVEN.png/330px-OH_LEUVEN.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "Kortrijk", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/KV_Kortrijk_logo_2016.svg/330px-KV_Kortrijk_logo_2016.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},
  {name: "RWDM", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/RWD_Molenbeek_logo.svg"},
  {name: "Dender", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/9/98/FCVDenderEH.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"},
  {name: "Beerschot", league: "Jupiler Pro", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Koninklijke_Beerschot_Voetbalclub_Antwerpen_logo.svg/330px-Koninklijke_Beerschot_Voetbalclub_Antwerpen_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"},

  // MLS (USA/Canada) - 30, badges verified individually via TheSportsDB
  // since its bulk team-list endpoint is capped at 10 on the free tier.
  {name: "Atlanta United", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/ej091x1602103070.png"},
  {name: "Austin FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/a3dlg61595434277.png"},
  {name: "CF Montreal", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/livdl31679344925.png"},
  {name: "Charlotte FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/b6p4uz1595434047.png"},
  {name: "Chicago Fire", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/8xuc781639493166.png"},
  {name: "Colorado Rapids", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/uppupv1473536412.png"},
  {name: "Columbus Crew", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/dzs8cp1629059854.png"},
  {name: "DC United", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/uwvsyt1467462609.png"},
  {name: "FC Cincinnati", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/vvhsqc1707631046.png"},
  {name: "FC Dallas", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/vxy8xy1602103187.png"},
  {name: "Houston Dynamo", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/yvz9dq1707631352.png"},
  {name: "Sporting Kansas City", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/tqupxw1473536504.png"},
  {name: "LA Galaxy", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/ysyysr1420227188.png"},
  {name: "Los Angeles FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/7nbj2a1602103638.png"},
  {name: "Inter Miami", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/m4it3e1602103647.png"},
  {name: "Minnesota United", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/vl67t41492453433.png"},
  {name: "Nashville SC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/znrwt71602103062.png"},
  {name: "New England Revolution", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/1ula2l1639493143.png"},
  {name: "New York City FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/m9vis71735140655.png"},
  {name: "New York Red Bulls", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/suytvy1473536462.png"},
  {name: "Orlando City", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/qyppxw1423832326.png"},
  {name: "Philadelphia Union", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/gyznyo1602103682.png"},
  {name: "Portland Timbers", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/skm30j1557953559.png"},
  {name: "Real Salt Lake", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/kkjlfa1556488022.png"},
  {name: "San Diego FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/7ka2xd1734621068.png"},
  {name: "San Jose Earthquakes", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/xyrqqt1420781048.png"},
  {name: "Seattle Sounders", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/2dy5cx1706711036.png"},
  {name: "St. Louis City SC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/22wanp1674118724.png"},
  {name: "Toronto FC", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/rsxyrr1473536512.png"},
  {name: "Vancouver Whitecaps", league: "MLS", logo: "https://r2.thesportsdb.com/images/media/team/badge/tpwxpy1473536521.png"},

  // LIGA PROFESIONAL ARGENTINA - 29. San Lorenzo's only entry in our free
  // data source is their basketball team, not football — rather than show
  // a wrong badge, it's left blank so the site's existing initials-avatar
  // fallback handles it honestly.
  {name: "Aldosivi", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/nqrjqb1517767667.png"},
  {name: "Argentinos Juniors", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/uqfjuo1769234850.png"},
  {name: "Atletico Tucuman", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/m5i2q21775755577.png"},
  {name: "Banfield", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/c2ea011775756104.png"},
  {name: "Barracas Central", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/rbkjba1707458543.png"},
  {name: "Belgrano", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/0twgzi1517768087.png"},
  {name: "Boca Juniors", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/bm7krb1775741582.png"},
  {name: "Central Cordoba", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/d62xkc1576101576.png"},
  {name: "Defensa y Justicia", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/3guvlh1775778978.png"},
  {name: "Deportivo Riestra", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/332h0l1578824392.png"},
  {name: "Rosario Central", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/y6q1ds1769660256.png"},
  {name: "Racing Club", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/vi4mu41695734959.png"},
  {name: "River Plate", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/03dmi31645539717.png"},
  {name: "Independiente", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/eki4nd1580842605.png"},
  {name: "San Lorenzo", league: "Liga Profesional Argentina", logo: ""},
  {name: "Estudiantes de La Plata", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/pf08dq1760634366.png"},
  {name: "Gimnasia La Plata", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/dtqto61775838814.png"},
  {name: "Godoy Cruz", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/d3c0ds1517768584.png"},
  {name: "Huracan", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/kppi2b1775776550.png"},
  {name: "Instituto", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/jup59w1578825794.png"},
  {name: "Lanus", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/ddty0w1769146364.png"},
  {name: "Newells Old Boys", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/23aftf1580842633.png"},
  {name: "Platense", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/lbs14n1769317149.png"},
  {name: "Sarmiento", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/xxofu71677634191.png"},
  {name: "Talleres", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/7hum2t1769310938.png"},
  {name: "Tigre", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/krryg71765858882.png"},
  {name: "Union Santa Fe", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/btnx6q1734587495.png"},
  {name: "Velez Sarsfield", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/jo98m71517769587.png"},
  {name: "Independiente Rivadavia", league: "Liga Profesional Argentina", logo: "https://r2.thesportsdb.com/images/media/team/badge/qgzi2b1769406125.png"},

  // AUSTRIAN BUNDESLIGA - 12, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "Austria Wien", league: "Austrian Bundesliga", logo: ""},
  {name: "FC Blau Weiß Linz", league: "Austrian Bundesliga", logo: ""},
  {name: "Grazer AK", league: "Austrian Bundesliga", logo: ""},
  {name: "LASK", league: "Austrian Bundesliga", logo: ""},
  {name: "RB Salzburg", league: "Austrian Bundesliga", logo: ""},
  {name: "Rapid Wien", league: "Austrian Bundesliga", logo: ""},
  {name: "SCR Altach", league: "Austrian Bundesliga", logo: ""},
  {name: "SV Ried", league: "Austrian Bundesliga", logo: ""},
  {name: "Sturm Graz", league: "Austrian Bundesliga", logo: ""},
  {name: "TSV Hartberg", league: "Austrian Bundesliga", logo: ""},
  {name: "WSG Tirol", league: "Austrian Bundesliga", logo: ""},
  {name: "Wolfsberger AC", league: "Austrian Bundesliga", logo: ""},

  // AUSTRIAN ERSTE LIGA - 16, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "Austria Lustenau", league: "Austrian Erste Liga", logo: ""},
  {name: "Austria Salzburg", league: "Austrian Erste Liga", logo: ""},
  {name: "Austria Wien II", league: "Austrian Erste Liga", logo: ""},
  {name: "FC Admira Wacker", league: "Austrian Erste Liga", logo: ""},
  {name: "FC Hertha Wels", league: "Austrian Erste Liga", logo: ""},
  {name: "FC Liefering", league: "Austrian Erste Liga", logo: ""},
  {name: "First Vienna", league: "Austrian Erste Liga", logo: ""},
  {name: "Floridsdorfer AC", league: "Austrian Erste Liga", logo: ""},
  {name: "Kapfenberger SV 1919", league: "Austrian Erste Liga", logo: ""},
  {name: "Rapid Wien II", league: "Austrian Erste Liga", logo: ""},
  {name: "SK Austria Klagenfurt", league: "Austrian Erste Liga", logo: ""},
  {name: "SKN St. Pölten", league: "Austrian Erste Liga", logo: ""},
  {name: "SKU Amstetten", league: "Austrian Erste Liga", logo: ""},
  {name: "SV Stripfing/Weiden", league: "Austrian Erste Liga", logo: ""},
  {name: "Schwarz-Weiß Bregenz", league: "Austrian Erste Liga", logo: ""},
  {name: "Sturm Graz II", league: "Austrian Erste Liga", logo: ""},

  // EFL CHAMPIONSHIP - 24, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "Birmingham City", league: "EFL Championship", logo: ""},
  {name: "Blackburn Rovers", league: "EFL Championship", logo: ""},
  {name: "Bristol City", league: "EFL Championship", logo: ""},
  {name: "Charlton Athletic", league: "EFL Championship", logo: ""},
  {name: "Coventry City", league: "EFL Championship", logo: ""},
  {name: "Derby County", league: "EFL Championship", logo: ""},
  {name: "Hull City", league: "EFL Championship", logo: ""},
  {name: "Ipswich Town", league: "EFL Championship", logo: ""},
  {name: "Leicester City", league: "EFL Championship", logo: ""},
  {name: "Middlesbrough", league: "EFL Championship", logo: ""},
  {name: "Millwall", league: "EFL Championship", logo: ""},
  {name: "Norwich City", league: "EFL Championship", logo: ""},
  {name: "Oxford United", league: "EFL Championship", logo: ""},
  {name: "Portsmouth", league: "EFL Championship", logo: ""},
  {name: "Preston North End", league: "EFL Championship", logo: ""},
  {name: "Queens Park Rangers", league: "EFL Championship", logo: ""},
  {name: "Sheffield United", league: "EFL Championship", logo: ""},
  {name: "Sheffield Wednesday", league: "EFL Championship", logo: ""},
  {name: "Southampton", league: "EFL Championship", logo: ""},
  {name: "Stoke City", league: "EFL Championship", logo: ""},
  {name: "Swansea City", league: "EFL Championship", logo: ""},
  {name: "Watford", league: "EFL Championship", logo: ""},
  {name: "West Bromwich Albion", league: "EFL Championship", logo: ""},
  {name: "Wrexham", league: "EFL Championship", logo: ""},

  // LA LIGA 2 - 22, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "AD Ceuta", league: "La Liga 2", logo: ""},
  {name: "Albacete", league: "La Liga 2", logo: ""},
  {name: "Burgos CF", league: "La Liga 2", logo: ""},
  {name: "CD Castellón", league: "La Liga 2", logo: ""},
  {name: "CD Leganés", league: "La Liga 2", logo: ""},
  {name: "CD Mirandés", league: "La Liga 2", logo: ""},
  {name: "Cultural Leonesa", league: "La Liga 2", logo: ""},
  {name: "Cádiz CF", league: "La Liga 2", logo: ""},
  {name: "Córdoba CF", league: "La Liga 2", logo: ""},
  {name: "Deportivo La Coruña", league: "La Liga 2", logo: ""},
  {name: "FC Andorra", league: "La Liga 2", logo: ""},
  {name: "Granada CF", league: "La Liga 2", logo: ""},
  {name: "Málaga CF", league: "La Liga 2", logo: ""},
  {name: "Racing Santander", league: "La Liga 2", logo: ""},
  {name: "Real Sociedad B", league: "La Liga 2", logo: ""},
  {name: "Real Valladolid", league: "La Liga 2", logo: ""},
  {name: "Real Zaragoza", league: "La Liga 2", logo: ""},
  {name: "SD Eibar", league: "La Liga 2", logo: ""},
  {name: "SD Huesca", league: "La Liga 2", logo: ""},
  {name: "Sporting Gijón", league: "La Liga 2", logo: ""},
  {name: "UD Almería", league: "La Liga 2", logo: ""},
  {name: "UD Las Palmas", league: "La Liga 2", logo: ""},

  // LIGUE 2 - 18, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "AS Nancy Lorraine", league: "Ligue 2", logo: ""},
  {name: "AS Saint-Étienne", league: "Ligue 2", logo: ""},
  {name: "Amiens SC", league: "Ligue 2", logo: ""},
  {name: "Clermont Foot 63", league: "Ligue 2", logo: ""},
  {name: "EA Guingamp", league: "Ligue 2", logo: ""},
  {name: "ESTAC Troyes", league: "Ligue 2", logo: ""},
  {name: "FC Annecy", league: "Ligue 2", logo: ""},
  {name: "Grenoble Foot 38", league: "Ligue 2", logo: ""},
  {name: "Le Mans", league: "Ligue 2", logo: ""},
  {name: "Montpellier HSC", league: "Ligue 2", logo: ""},
  {name: "Pau", league: "Ligue 2", logo: ""},
  {name: "Red Star", league: "Ligue 2", logo: ""},
  {name: "Rodez AF", league: "Ligue 2", logo: ""},
  {name: "SC Bastia", league: "Ligue 2", logo: ""},
  {name: "Stade Lavallois", league: "Ligue 2", logo: ""},
  {name: "Stade de Reims", league: "Ligue 2", logo: ""},
  {name: "US Boulogne", league: "Ligue 2", logo: ""},
  {name: "USL Dunkerque", league: "Ligue 2", logo: ""},

  // SERIE B - 20, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "AC Monza", league: "Serie B", logo: ""},
  {name: "AC Reggiana 1919", league: "Serie B", logo: ""},
  {name: "Calcio Padova", league: "Serie B", logo: ""},
  {name: "Carrarese Calcio", league: "Serie B", logo: ""},
  {name: "Cesena", league: "Serie B", logo: ""},
  {name: "Delfino Pescara", league: "Serie B", logo: ""},
  {name: "Empoli", league: "Serie B", logo: ""},
  {name: "FC Südtirol", league: "Serie B", logo: ""},
  {name: "Frosinone Calcio", league: "Serie B", logo: ""},
  {name: "Juve Stabia", league: "Serie B", logo: ""},
  {name: "Mantova 1911 SSD", league: "Serie B", logo: ""},
  {name: "Modena", league: "Serie B", logo: ""},
  {name: "Palermo", league: "Serie B", logo: ""},
  {name: "SSC Bari", league: "Serie B", logo: ""},
  {name: "Sampdoria", league: "Serie B", logo: ""},
  {name: "Spezia Calcio", league: "Serie B", logo: ""},
  {name: "US Avellino", league: "Serie B", logo: ""},
  {name: "US Catanzaro", league: "Serie B", logo: ""},
  {name: "Venezia", league: "Serie B", logo: ""},
  {name: "Virtus Entella", league: "Serie B", logo: ""},

  // 2. BUNDESLIGA - 18, real teams from openfootball's 2025-26 season data (no key needed); logos left blank pending individual verification, using the initials-avatar fallback.
  {name: "1. FC Kaiserslautern", league: "2. Bundesliga", logo: ""},
  {name: "1. FC Magdeburg", league: "2. Bundesliga", logo: ""},
  {name: "1. FC Nürnberg", league: "2. Bundesliga", logo: ""},
  {name: "Arminia Bielefeld", league: "2. Bundesliga", logo: ""},
  {name: "Dynamo Dresden", league: "2. Bundesliga", logo: ""},
  {name: "Eintracht Braunschweig", league: "2. Bundesliga", logo: ""},
  {name: "FC Schalke 04", league: "2. Bundesliga", logo: ""},
  {name: "Fortuna Düsseldorf", league: "2. Bundesliga", logo: ""},
  {name: "Hannover 96", league: "2. Bundesliga", logo: ""},
  {name: "Hertha BSC", league: "2. Bundesliga", logo: ""},
  {name: "Holstein Kiel", league: "2. Bundesliga", logo: ""},
  {name: "Karlsruher SC", league: "2. Bundesliga", logo: ""},
  {name: "Preußen Münster", league: "2. Bundesliga", logo: ""},
  {name: "SC Paderborn 07", league: "2. Bundesliga", logo: ""},
  {name: "SV 07 Elversberg", league: "2. Bundesliga", logo: ""},
  {name: "SV Darmstadt 98", league: "2. Bundesliga", logo: ""},
  {name: "SpVgg Greuther Fürth", league: "2. Bundesliga", logo: ""},
  {name: "VfL Bochum", league: "2. Bundesliga", logo: ""}
];

// Real, verified league badges pulled directly from TheSportsDB's own
// lookupleague.php for each of our 14 league IDs — unlike the old guessed
// Wikipedia URLs, these are confirmed to actually exist.
const leagueLogos = {
  "Premier League": "https://r2.thesportsdb.com/images/media/league/badge/gasy9d1737743125.png",
  "La Liga": "https://r2.thesportsdb.com/images/media/league/badge/ja4it51687628717.png",
  "Serie A": "https://r2.thesportsdb.com/images/media/league/badge/67q3q21679951383.png",
  "Ligue 1": "https://r2.thesportsdb.com/images/media/league/badge/9f7z9d1742983155.png",
  "Saudi Pro": "https://r2.thesportsdb.com/images/media/league/badge/w67i621701772123.png",
  "Bundesliga": "https://r2.thesportsdb.com/images/media/league/badge/teqh1b1679952008.png",
  "Eredivisie": "https://r2.thesportsdb.com/images/media/league/badge/5cdsu21725984946.png",
  "Primeira Liga": "https://r2.thesportsdb.com/images/media/league/badge/3tgdke1782689102.png",
  "Super Lig": "https://r2.thesportsdb.com/images/media/league/badge/dikktz1785779891.png",
  "Scottish Prem": "https://r2.thesportsdb.com/images/media/league/badge/72d3zc1688333496.png",
  "Russian PL": "https://r2.thesportsdb.com/images/media/league/badge/d4yp7g1690178551.png",
  "Brasileirao": "https://r2.thesportsdb.com/images/media/league/badge/lywv7t1766787179.png",
  "Super League GR": "https://r2.thesportsdb.com/images/media/league/badge/sni7f51782459204.png",
  "Jupiler Pro": "https://r2.thesportsdb.com/images/media/league/badge/xj8azr1786316931.png",
  "MLS": "https://r2.thesportsdb.com/images/media/league/badge/dqo6r91549878326.png",
  "Liga Profesional Argentina": "https://r2.thesportsdb.com/images/media/league/badge/rk9xhx1768238251.png"
};

// Curated "marquee" clubs per league used to pick an eye-catching featured match.
const marqueeClubs = [
  "Arsenal", "Manchester United", "Manchester City", "Liverpool", "Chelsea", "Tottenham Hotspur",
  "Real Madrid", "Barcelona", "Atletico Madrid",
  "AC Milan", "Inter Milan", "Juventus", "AS Roma", "Napoli",
  "Paris Saint-Germain", "Marseille", "Lyon", "Monaco",
  "Al Hilal", "Al Nassr", "Al Ittihad", "Al Ahli",
  "Bayern Munich", "Borussia Dortmund", "RB Leipzig",
  "Ajax", "PSV Eindhoven", "Feyenoord",
  "Benfica", "Porto", "Sporting CP",
  "Galatasaray", "Fenerbahce", "Besiktas",
  "Celtic", "Rangers",
  "Zenit", "Spartak Moscow",
  "Flamengo", "Palmeiras", "Corinthians", "Sao Paulo",
  "Olympiacos", "Panathinaikos",
  "Club Brugge", "Anderlecht"
];

// --- Broken-image safety net: any team/league badge that fails to load
// falls back to a generated initials avatar instead of showing a blank icon.
function initialsAvatar(name) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const palette = ["#00c853", "#2962ff", "#ff6d00", "#d500f9", "#00b8d4", "#c51162", "#6200ea"];
  let hash = 0;
  for (const ch of name) hash = ch.charCodeAt(0) + ((hash << 5) - hash);
  const color = palette[Math.abs(hash) % palette.length];
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'>
    <rect width='40' height='40' rx='8' fill='${color}'/>
    <text x='50%' y='55%' font-family='Inter,Arial,sans-serif' font-size='16' fill='white'
      text-anchor='middle' dominant-baseline='middle' font-weight='700'>${initials}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function onBadgeError(imgEl, name) {
  imgEl.onerror = null;
  imgEl.src = initialsAvatar(name);
}

const matchesDiv = document.getElementById("matches");
let activeLeague = "All";
let searchTerm = "";

// --- Real data via TheSportsDB's public free API (key "123" is their
// documented open test key, not a secret — meant to be used client-side).
const SPORTSDB_KEY = "123";
const SPORTSDB_BASE = `https://www.thesportsdb.com/api/v1/json/${SPORTSDB_KEY}`;

// Our own Cloudflare Worker, hosting the per-match chat + prediction rooms
// (see api-proxy/worker.js — the ChatRoom Durable Object).
const CHAT_WORKER_BASE = "https://goalhub-api-proxy.betterdays-goalhub.workers.dev";

// Leagues where the Worker can fetch a full, untruncated standings table via
// football-data.org's free tier (proxied through /standings — see worker.js).
// Any league not listed here falls back to TheSportsDB's free lookuptable.php,
// which only ever returns the top 5 rows.
const STANDINGS_LEAGUES = {
  "Premier League": "PL",
  "La Liga": "PD",
  "Serie A": "SA",
  "Ligue 1": "FL1",
  "Bundesliga": "BL1",
  "Eredivisie": "DED",
  "Primeira Liga": "PPL",
  "Brasileirao": "BSA"
};

const LEAGUE_IDS = {
  "Premier League": 4328,
  "La Liga": 4335,
  "Serie A": 4332,
  "Ligue 1": 4334,
  "Saudi Pro": 4668,
  "Bundesliga": 4331,
  "Eredivisie": 4337,
  "Primeira Liga": 4344,
  "Super Lig": 4339,
  "Scottish Prem": 4330,
  "Russian PL": 4355,
  "Brasileirao": 4351,
  "Super League GR": 4336,
  "Jupiler Pro": 4338,
  "MLS": 4346,
  "Liga Profesional Argentina": 4406,
  "Austrian Bundesliga": 4621,
  "Austrian Erste Liga": 4796,
  "EFL Championship": 4329,
  "La Liga 2": 4400,
  "Ligue 2": 4401,
  "Serie B": 4394,
  "2. Bundesliga": 4399
};

function badgeImg(logo, name, cssClass) {
  // An empty/missing src doesn't reliably fire onerror in every browser, so
  // when there's no logo URL at all (no API badge and no fallback match),
  // go straight to the initials avatar instead of leaving <img src=""> to
  // silently render blank.
  const src = logo || initialsAvatar(name);
  return `<img class="${cssClass}" src="${src}" alt="${name}" loading="lazy" onerror="onBadgeError(this,'${name.replace(/'/g, "")}')">`;
}

// The API doesn't always supply a team badge on the events-by-day endpoint;
// fall back to our own curated logo for that team name if we have one.
function resolveLogo(apiBadge, teamName) {
  if (apiBadge) return apiBadge;
  const known = allTeams.find(t => t.name.toLowerCase() === teamName.toLowerCase());
  return known ? known.logo : "";
}

function clickableTeam(team) {
  return `<div class="match-team" onclick="event.stopPropagation(); openTeamModal('${team.id}','${team.name.replace(/'/g, "")}','${team.logo}','${team.league.replace(/'/g, "")}')">${badgeImg(team.logo, team.name, "")}<span>${team.name}</span></div>`;
}

// Plain-English status labels instead of raw API codes (picked up from how
// LiveScore/Sofascore/365Scores all phrase these).
const STATUS_LABELS = {
  FT: "Ended",
  AET: "After ET",
  PEN: "After Pens",
  HT: "Half-time",
  "1H": "1st Half",
  "2H": "2nd Half",
  ET: "Extra Time"
};

function isLiveStatus(status) {
  return !!status && !["NS", "FT", "AET", "PEN", "PST", "CANC", "ABD"].includes(status);
}

function isFinishedStatus(status) {
  return status === "FT" || status === "AET" || status === "PEN";
}

function matchStatusDisplay(f) {
  const hasScore = f.homeScore !== null && f.homeScore !== undefined && f.awayScore !== null && f.awayScore !== undefined;
  if (!hasScore || f.status === "NS" || !f.status) {
    return { primary: f.time || "TBD", tag: "" };
  }
  const label = STATUS_LABELS[f.status] || f.status || "LIVE";
  return { primary: `${f.homeScore} - ${f.awayScore}`, tag: label };
}

const LEAGUE_COUNTRY = {
  "Premier League": "England",
  "La Liga": "Spain",
  "Serie A": "Italy",
  "Ligue 1": "France",
  "Saudi Pro": "Saudi Arabia",
  "Bundesliga": "Germany",
  "Eredivisie": "Netherlands",
  "Primeira Liga": "Portugal",
  "Super Lig": "Turkey",
  "Scottish Prem": "Scotland",
  "Russian PL": "Russia",
  "Brasileirao": "Brazil",
  "Super League GR": "Greece",
  "Jupiler Pro": "Belgium",
  "MLS": "USA/Canada",
  "Liga Profesional Argentina": "Argentina",
  "Austrian Bundesliga": "Austria",
  "Austrian Erste Liga": "Austria",
  "EFL Championship": "England",
  "La Liga 2": "Spain",
  "Ligue 2": "France",
  "Serie B": "Italy",
  "2. Bundesliga": "Germany"
};

// --- Fixtures for the currently-selected DAY, fetched live from the API,
// one league at a time. A single day naturally won't show every team in a
// league — real fixtures are spread across the week — but the ‹ › arrows
// browse one literal calendar date at a time, showing only what's actually
// scheduled that day rather than a whole matchday's worth of fixtures.
let currentDate = new Date();
let currentFixtures = [];
let fixturesById = {};
let fixturesLoading = false;

// The shared free API key is flaky under bursts of parallel requests — the
// exact same call can fail once and succeed a moment later. Retry with a
// short backoff before giving up, and stagger the per-league dispatch below
// instead of firing all 14 requests in the same instant.
async function fetchJsonWithRetry(url, attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    const res = await fetch(url);
    if (res.status === 429) {
      // The shared free key ("123") is used by everyone testing TheSportsDB
      // at once, so 429s are common under load — honor Retry-After (capped)
      // instead of hammering it again immediately, which only makes it worse.
      if (i === attempts - 1) throw new Error("HTTP 429");
      const retryAfterSec = Math.min(Number(res.headers.get("Retry-After")) || 3, 10);
      await new Promise(r => setTimeout(r, retryAfterSec * 1000));
      continue;
    }
    if (!res.ok) {
      if (i === attempts - 1) throw new Error("HTTP " + res.status);
      await new Promise(r => setTimeout(r, 400 + i * 500));
      continue;
    }
    return await res.json();
  }
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

function formatDateLabel(date) {
  const d = new Date(date);
  const today = new Date();
  const diffDays = Math.round((new Date(d).setHours(0, 0, 0, 0) - new Date(today).setHours(0, 0, 0, 0)) / 86400000);
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays === -1) return "Yesterday";
  return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "short" });
}

// Browsing one exact calendar day at a time meant an off-day showed nothing
// at all, even though that's a real gap between fixtures rather than a
// broken app. Instead, each ‹ › click loads a 3-day window (yesterday /
// today / tomorrow relative to wherever you've navigated to) — a mix of
// recent results and near-term fixtures — without ballooning into a whole
// week's worth of requests against the shared free API key.
const WINDOW_DAYS_BACK = 1;
const WINDOW_DAYS_FORWARD = 1;
const WINDOW_SIZE = WINDOW_DAYS_BACK + WINDOW_DAYS_FORWARD + 1;

function windowDates(centerDate) {
  const dates = [];
  for (let offset = -WINDOW_DAYS_BACK; offset <= WINDOW_DAYS_FORWARD; offset++) {
    const d = new Date(centerDate);
    d.setDate(d.getDate() + offset);
    dates.push(d);
  }
  return dates;
}

function windowLabel(centerDate) {
  const dates = windowDates(centerDate);
  const first = formatApiDate(dateKey(dates[0]));
  const last = formatApiDate(dateKey(dates[dates.length - 1]));
  return `${first} – ${last}`;
}

async function fetchFixturesForWindow(centerDate) {
  const dateKeys = windowDates(centerDate).map(dateKey);
  const entries = Object.entries(LEAGUE_IDS);
  const fixturesByLeague = [];
  let anyRequestSucceeded = false;
  for (let i = 0; i < entries.length; i++) {
    const [league, id] = entries[i];
    for (let j = 0; j < dateKeys.length; j++) {
      try {
        const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/eventsday.php?d=${dateKeys[j]}&l=${id}`);
        anyRequestSucceeded = true;
        fixturesByLeague.push((data.events || []).map(e => ({
          id: e.idEvent,
          league,
          time: (e.strTimeLocal || e.strTime || "").slice(0, 5),
          date: e.dateEventLocal || e.dateEvent,
          status: e.strStatus,
          venue: e.strVenue,
          venueId: e.idVenue,
          round: e.intRound,
          homeScore: e.intHomeScore !== null ? Number(e.intHomeScore) : null,
          awayScore: e.intAwayScore !== null ? Number(e.intAwayScore) : null,
          home: { id: e.idHomeTeam, name: e.strHomeTeam, logo: resolveLogo(e.strHomeTeamBadge, e.strHomeTeam), league },
          away: { id: e.idAwayTeam, name: e.strAwayTeam, logo: resolveLogo(e.strAwayTeamBadge, e.strAwayTeam), league }
        })));
      } catch (err) {
        fixturesByLeague.push([]);
      }
      await sleep(100);
    }
  }
  return { fixtures: fixturesByLeague.flat(), ok: anyRequestSucceeded };
}

async function loadFixturesAndRender() {
  fixturesLoading = true;
  matchesDiv.innerHTML = `<div class="no-results">Loading real fixtures…</div>`;
  document.getElementById("featured").innerHTML = `<div class="team-no-fixture">Loading…</div>`;
  document.querySelector(".date-label").textContent = windowLabel(currentDate);

  const result = await fetchFixturesForWindow(currentDate);
  currentFixtures = result.fixtures;
  fixturesById = Object.fromEntries(currentFixtures.map(f => [f.id, f]));
  fixturesLoading = false;

  if (!result.ok) {
    matchesDiv.innerHTML = `<div class="no-results">Couldn't reach the live football API right now (it can be flaky under load). <span class="retry-link" onclick="loadFixturesAndRender()">Tap to retry</span>.</div>`;
    document.getElementById("featured").innerHTML = `<div class="team-no-fixture">Unavailable — retry above.</div>`;
    return;
  }
  loadMatches();
  renderFeaturedMatch();
}

function changeDate(delta) {
  currentDate.setDate(currentDate.getDate() + delta * WINDOW_SIZE);
  loadFixturesAndRender();
}

let statusFilter = "all";

function setStatusFilter(filter) {
  statusFilter = filter;
  loadMatches();
}

function loadMatches() {
  let fixturesToUse = activeLeague === "All" ? currentFixtures : currentFixtures.filter(f => f.league === activeLeague);

  if (searchTerm !== "") {
    const term = searchTerm.toLowerCase();
    fixturesToUse = fixturesToUse.filter(f => f.home.name.toLowerCase().includes(term) || f.away.name.toLowerCase().includes(term));
  }

  const liveCount = fixturesToUse.filter(f => isLiveStatus(f.status)).length;

  const filterBar = `
    <div class="status-filter-bar">
      <button class="status-filter-btn${statusFilter === "all" ? " active" : ""}" onclick="setStatusFilter('all')">All</button>
      <button class="status-filter-btn status-filter-live${statusFilter === "live" ? " active" : ""}" onclick="setStatusFilter('live')"><span class="live-dot"></span>Live${liveCount ? ` (${liveCount})` : ""}</button>
      <button class="status-filter-btn${statusFilter === "finished" ? " active" : ""}" onclick="setStatusFilter('finished')">Finished</button>
      <button class="status-filter-btn${statusFilter === "upcoming" ? " active" : ""}" onclick="setStatusFilter('upcoming')">Upcoming</button>
    </div>`;

  if (statusFilter === "live") fixturesToUse = fixturesToUse.filter(f => isLiveStatus(f.status));
  else if (statusFilter === "finished") fixturesToUse = fixturesToUse.filter(f => isFinishedStatus(f.status));
  else if (statusFilter === "upcoming") fixturesToUse = fixturesToUse.filter(f => f.status === "NS" || !f.status);

  if (fixturesToUse.length === 0) {
    const label = document.querySelector(".date-label").textContent;
    // We can't always tell "genuinely no games that day" apart from "the
    // free API had a silent hiccup and returned nothing" — so when there's
    // no search/status filter involved, offer an easy retry rather than
    // just asserting there's nothing to see.
    const retryHint = searchTerm || statusFilter !== "all"
      ? ""
      : ` If that seems wrong, <span class="retry-link" onclick="loadFixturesAndRender()">tap to retry</span> — the free API can occasionally miss a request.`;
    matchesDiv.innerHTML = filterBar + `<div class="no-results">No real fixtures for ${label}${searchTerm ? " matching your search" : statusFilter !== "all" ? ` in "${statusFilter}"` : ""}. Try another ${statusFilter !== "all" ? "filter" : "day"}.${retryHint}</div>`;
    return;
  }

  const leaguesToShow = [...new Set(fixturesToUse.map(f => f.league))];
  let bodyHtml = "";

  leaguesToShow.forEach(league => {
    const leagueFixtures = fixturesToUse
      .filter(f => f.league === league)
      .slice()
      .sort((a, b) => (a.time || "").localeCompare(b.time || ""));

    let html = `<div class="league-group">
      <div class="league-title">
        ${badgeImg(leagueLogos[league], league, "")}
        <div class="league-title-text">
          <span class="league-name">${league}</span>
          <span class="league-country">${LEAGUE_COUNTRY[league] || ""}</span>
        </div>
        <span class="league-table-link" onclick="event.stopPropagation(); openLeagueTableModal('${league.replace(/'/g, "")}')">Table ›</span>
      </div>`;

    leagueFixtures.forEach(f => {
      const status = matchStatusDisplay(f);
      html += `
      <div class="match-row" onclick="openMatchModal('${f.id}')">
        <div class="match-status">${status.primary}${status.tag ? `<span class="match-tag">${status.tag}</span>` : ""}</div>
        <div class="match-teams">
          ${clickableTeam(f.home)}
          ${clickableTeam(f.away)}
        </div>
        <div class="fav-star" onclick="event.stopPropagation()">☆</div>
      </div>`;
    });
    html += `</div>`;
    bodyHtml += html;
  });

  matchesDiv.innerHTML = filterBar + bodyHtml;
}

function searchTeams() {
  searchTerm = document.getElementById("searchInput").value;
  loadMatches();
}

function filterLeague(league, el) {
  activeLeague = league;
  document.querySelectorAll(".comp-item").forEach(i => i.classList.remove("active"));
  el.classList.add("active");
  loadMatches();
}

const compDiv = document.getElementById("competitions");
const leagues = [...new Set(allTeams.map(t => t.league))].filter(l => l !== "Champions League");

const VISIBLE_LEAGUE_COUNT = 5; // plus "All Leagues" = 6 chips shown before the toggle, on narrow screens

compDiv.innerHTML = `<div class="comp-item active" onclick="filterLeague('All', this)"><span>All Leagues</span></div>`;
leagues.forEach((league, i) => {
  const extraClass = i >= VISIBLE_LEAGUE_COUNT ? " extra" : "";
  compDiv.innerHTML += `<div class="comp-item${extraClass}" onclick="filterLeague('${league}', this)">${badgeImg(leagueLogos[league], league, "")}<span>${league}</span></div>`;
});

const hiddenCount = Math.max(0, leagues.length - VISIBLE_LEAGUE_COUNT);
if (hiddenCount > 0) {
  compDiv.innerHTML += `<div class="comp-item comp-toggle" id="compToggle" onclick="toggleMoreLeagues()"><span>+${hiddenCount} more</span></div>`;
}

function toggleMoreLeagues() {
  const expanded = compDiv.classList.toggle("expanded");
  const toggleLabel = document.querySelector("#compToggle span");
  toggleLabel.textContent = expanded ? "Show less" : `+${hiddenCount} more`;
}

// --- Today's Featured: highlights one of the currently-loaded real
// fixtures, preferring a marquee matchup, so it always reflects an actual
// game from the list rendered below (never an invented one).
async function renderFeaturedMatch() {
  const featuredDiv = document.getElementById("featured");
  if (currentFixtures.length === 0) {
    featuredDiv.innerHTML = `<div class="team-no-fixture">No fixtures for ${windowLabel(currentDate)}.</div>`;
    return;
  }
  const marqueeFixtures = currentFixtures.filter(f => marqueeClubs.includes(f.home.name) || marqueeClubs.includes(f.away.name));
  const pool = (marqueeFixtures.length > 0 ? marqueeFixtures : currentFixtures).slice().sort((a, b) => {
    const aUpcoming = a.status === "NS" ? 0 : 1;
    const bUpcoming = b.status === "NS" ? 0 : 1;
    if (aUpcoming !== bUpcoming) return aUpcoming - bUpcoming;
    return `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`);
  });
  const fixture = pool[0];
  const { home, away, league } = fixture;
  const status = matchStatusDisplay(fixture);
  const narrative = await matchNarrative(fixture);

  featuredDiv.innerHTML = `
    <div class="featured-card">
      <div class="featured-tag"><span class="dot"></span>${status.tag || windowLabel(currentDate)}</div>
      <div class="featured-teams">
        <div class="featured-team" onclick="openTeamModal('${home.id}','${home.name.replace(/'/g, "")}','${home.logo}','${league.replace(/'/g, "")}')">
          ${badgeImg(home.logo, home.name, "")}
          <span>${home.name}</span>
        </div>
        <div class="featured-vs">VS</div>
        <div class="featured-team" onclick="openTeamModal('${away.id}','${away.name.replace(/'/g, "")}','${away.logo}','${league.replace(/'/g, "")}')">
          ${badgeImg(away.logo, away.name, "")}
          <span>${away.name}</span>
        </div>
      </div>
      <div class="featured-meta">${league_icon(league)}<strong>${league}</strong> · ${status.primary}</div>
      <div class="featured-narrative">${narrative}</div>
    </div>`;
}

function league_icon(league) {
  return badgeImg(leagueLogos[league], league, "");
}

function formatApiDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

// --- Team detail modal: fetches this team's real last result, next fixture,
// and squad from the API on demand, using the team ID we already have from
// the fixture the user clicked. Cached per team ID so reopening the same
// team doesn't refetch.
const teamDetailCache = {};
const teamSquadCache = {};
const teamTabCache = {};
let currentTeamModal = null;

async function openTeamModal(teamId, teamName, teamLogo, teamLeague) {
  currentTeamModal = { id: teamId, name: teamName, logo: teamLogo, league: teamLeague };
  document.getElementById("teamModalContent").innerHTML = `
    <div class="team-modal-header">
      ${badgeImg(teamLogo, teamName, "team-modal-badge")}
      <div>
        <h2>${teamName}</h2>
        <div class="team-modal-league">${league_icon(teamLeague)}${teamLeague}</div>
      </div>
    </div>
    <div class="match-modal-tabs">
      <button class="match-tab-btn active" data-team-tab="overview" onclick="showTeamTab('overview')">Overview</button>
      <button class="match-tab-btn" data-team-tab="squad" onclick="showTeamTab('squad')">Squad</button>
    </div>
    <div class="match-modal-tab-body" id="teamTabBody"></div>`;
  document.getElementById("teamModal").classList.add("open");

  if (!teamId) {
    document.getElementById("teamTabBody").innerHTML = `<div class="team-no-fixture">No team ID available — can't fetch live data for this club.</div>`;
    return;
  }

  showTeamTab("overview");
}

async function showTeamTab(tab) {
  const team = currentTeamModal;
  if (!team) return;

  document.querySelectorAll("[data-team-tab]").forEach(b => b.classList.toggle("active", b.dataset.teamTab === tab));
  const body = document.getElementById("teamTabBody");

  const cacheKey = `${team.id}|${tab}`;
  if (teamTabCache[cacheKey]) {
    body.innerHTML = teamTabCache[cacheKey];
    return;
  }

  body.innerHTML = `<div class="team-no-fixture">Loading…</div>`;

  let html, failed = false;
  try {
    if (tab === "overview") html = await renderTeamOverviewTab(team.id, team.name);
    else if (tab === "squad") html = await renderTeamSquadTab(team.id, team.name);
  } catch (err) {
    failed = true;
    html = `<div class="no-results">Couldn't load this right now (the free API can be flaky under load). <span class="retry-link" onclick="showTeamTab('${tab}')">Tap to retry</span>.</div>`;
  }

  if (currentTeamModal && currentTeamModal.id === team.id) {
    if (!failed) teamTabCache[cacheKey] = html;
    body.innerHTML = html;
  }
}

async function renderTeamOverviewTab(teamId, teamName) {
  let detail = teamDetailCache[teamId];
  if (!detail) {
    const [lastRes, nextRes] = await Promise.all([
      fetchJsonWithRetry(`${SPORTSDB_BASE}/eventslast.php?id=${teamId}`),
      fetchJsonWithRetry(`${SPORTSDB_BASE}/eventsnext.php?id=${teamId}`)
    ]);
    detail = {
      last: (lastRes.results || []).slice(0, 5),
      next: (nextRes.events || []).slice(0, 1)
    };
    teamDetailCache[teamId] = detail;
  }

  let fixtureHtml = `<div class="team-no-fixture">No upcoming fixture found.</div>`;
  if (detail.next && detail.next[0]) {
    const n = detail.next[0];
    fixtureHtml = `
      <div class="team-fixture-card">
        <div class="team-fixture-team">${badgeImg(resolveLogo(n.strHomeTeamBadge, n.strHomeTeam), n.strHomeTeam, "")}<span>${n.strHomeTeam}</span></div>
        <div class="team-fixture-time">${(n.strTimeLocal || n.strTime || "").slice(0, 5)}<span>${formatApiDate(n.dateEvent)}</span></div>
        <div class="team-fixture-team">${badgeImg(resolveLogo(n.strAwayTeamBadge, n.strAwayTeam), n.strAwayTeam, "")}<span>${n.strAwayTeam}</span></div>
      </div>`;
  }

  let resultsHtml = `<div class="team-no-fixture">No recent results available.</div>`;
  if (detail.last && detail.last.length > 0) {
    resultsHtml = detail.last.map(r => {
      const isHome = r.strHomeTeam === teamName;
      const teamGoals = Number(isHome ? r.intHomeScore : r.intAwayScore);
      const oppGoals = Number(isHome ? r.intAwayScore : r.intHomeScore);
      const homeLogo = resolveLogo(r.strHomeTeamBadge, r.strHomeTeam);
      const awayLogo = resolveLogo(r.strAwayTeamBadge, r.strAwayTeam);
      let outcome = "draw";
      if (teamGoals > oppGoals) outcome = "win";
      else if (teamGoals < oppGoals) outcome = "loss";
      return `
        <div class="team-result-row outcome-${outcome}">
          <div class="team-result-date">${formatApiDate(r.dateEvent)}</div>
          <div class="team-result-teams">
            <span class="team-result-team">${badgeImg(homeLogo, r.strHomeTeam, "")}${r.strHomeTeam}</span>
            <span class="team-result-vs">vs</span>
            <span class="team-result-team">${badgeImg(awayLogo, r.strAwayTeam, "")}${r.strAwayTeam}</span>
          </div>
          <div class="team-result-score">${r.intHomeScore} - ${r.intAwayScore}</div>
        </div>`;
    }).join("");
  }

  return `
    <div class="team-modal-section-title">Upcoming Fixture</div>
    ${fixtureHtml}
    <div class="team-modal-section-title">Recent Results</div>
    <div class="team-results-list">${resultsHtml}</div>`;
}

// Buckets TheSportsDB's free-text position strings ("Right-Back", "Defensive
// Midfield", "Left Wing"...) into the four groups every squad list uses.
function squadPositionGroup(position) {
  const p = (position || "").toLowerCase();
  if (p.includes("goalkeeper")) return "Goalkeepers";
  if (p.includes("back") || p.includes("defender") || p.includes("centre-back")) return "Defenders";
  if (p.includes("midfield")) return "Midfielders";
  if (p.includes("wing") || p.includes("forward") || p.includes("striker")) return "Forwards";
  return "Coaching Staff";
}

async function renderTeamSquadTab(teamId, teamName) {
  const manual = MANUAL_SQUADS[teamName];
  const isManual = Array.isArray(manual) && manual.length > 0;

  let squad;
  if (isManual) {
    squad = manual.map(p => ({ strPlayer: p.name, strPosition: p.position || "", strNumber: p.number || "", strCutout: "", strThumb: "" }));
  } else {
    squad = teamSquadCache[teamId];
    if (!squad) {
      const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/lookup_all_players.php?id=${teamId}`);
      squad = Array.isArray(data.player) ? data.player : [];
      teamSquadCache[teamId] = squad;
    }
  }
  if (squad.length === 0) {
    return `<div class="team-no-fixture">Squad isn't published for this team on our free data source.</div>`;
  }

  const groups = { Goalkeepers: [], Defenders: [], Midfielders: [], Forwards: [], "Coaching Staff": [] };
  squad.forEach(p => groups[squadPositionGroup(p.strPosition)].push(p));

  const renderPlayer = p => `
    <div class="lineup-player">
      ${badgeImg(p.strCutout || p.strThumb || "", p.strPlayer, "lineup-photo")}
      ${p.strNumber ? `<span class="lineup-number">${p.strNumber}</span>` : ""}
      <span class="lineup-name">${p.strPlayer}</span>
      <span class="lineup-position">${p.strPosition || ""}</span>
    </div>`;

  const sections = Object.entries(groups)
    .filter(([, list]) => list.length > 0)
    .map(([name, list]) => `
      <div class="team-modal-section-title">${name}</div>
      ${list.map(renderPlayer).join("")}`)
    .join("");

  // A manually-entered squad is presumed complete — only show the "partial
  // data" note when we're falling back to the free tier's ~10-entry list.
  if (isManual) return sections;
  return `
    <div class="h2h-note">Our free data source only has a partial squad list for this team — not the full roster.</div>
    ${sections}`;
}

function closeTeamModal() {
  document.getElementById("teamModal").classList.remove("open");
  currentTeamModal = null;
}

// --- Match detail modal: Info / Line-ups / Table / H2H tabs (deliberately
// no odds/betting content). Info renders instantly from data we already
// have; the other three tabs fetch lazily on first open and cache per
// match so switching tabs back and forth doesn't re-fetch.
let currentMatchFixture = null;
const matchTabCache = {};

function seasonStringForLeague(league, dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  // Calendar-year leagues — confirmed against TheSportsDB's own
  // strCurrentSeason for each (Brasileirao: "2026", Argentina: "2026" —
  // despite MLS also running March-December, its own metadata reports
  // "2026-2027", so MLS uses the default Aug-cutoff format below).
  if (league === "Brasileirao" || league === "Liga Profesional Argentina") return String(d.getFullYear());
  const year = d.getMonth() >= 6 ? d.getFullYear() : d.getFullYear() - 1;
  return `${year}-${year + 1}`;
}

function openMatchModal(matchId) {
  const fixture = fixturesById[matchId];
  if (!fixture) return;
  currentMatchFixture = fixture;
  const status = matchStatusDisplay(fixture);

  document.getElementById("matchModalContent").innerHTML = `
    <div class="match-modal-league">${league_icon(fixture.league)}<span>${fixture.league}</span><span class="match-modal-country">${LEAGUE_COUNTRY[fixture.league] || ""}</span></div>
    <div class="match-modal-teams">
      <div class="match-modal-team" onclick="closeMatchModal(); openTeamModal('${fixture.home.id}','${fixture.home.name.replace(/'/g, "")}','${fixture.home.logo}','${fixture.league.replace(/'/g, "")}')">
        ${badgeImg(fixture.home.logo, fixture.home.name, "")}<span>${fixture.home.name}</span>
      </div>
      <div class="match-modal-center">
        <div class="match-modal-time">${status.primary}</div>
        <div class="match-modal-sub">${status.tag || formatDateLabel(new Date(fixture.date + "T00:00:00"))}</div>
      </div>
      <div class="match-modal-team" onclick="closeMatchModal(); openTeamModal('${fixture.away.id}','${fixture.away.name.replace(/'/g, "")}','${fixture.away.logo}','${fixture.league.replace(/'/g, "")}')">
        ${badgeImg(fixture.away.logo, fixture.away.name, "")}<span>${fixture.away.name}</span>
      </div>
    </div>
    <div class="match-modal-tabs">
      <button class="match-tab-btn active" data-tab="info" onclick="showMatchTab('info')">Info</button>
      <button class="match-tab-btn" data-tab="lineups" onclick="showMatchTab('lineups')">Line-ups</button>
      <button class="match-tab-btn" data-tab="table" onclick="showMatchTab('table')">Table</button>
      <button class="match-tab-btn" data-tab="h2h" onclick="showMatchTab('h2h')">H2H</button>
      <button class="match-tab-btn" data-tab="chat" onclick="showMatchTab('chat')">Chat</button>
      <button class="match-tab-btn" data-tab="motm" onclick="showMatchTab('motm')">MOTM</button>
    </div>
    <div class="match-modal-tab-body" id="matchTabBody"></div>`;

  document.getElementById("matchModal").classList.add("open");
  showMatchTab("info");
}

function closeMatchModal() {
  document.getElementById("matchModal").classList.remove("open");
  currentMatchFixture = null;
  closeChatSocket();
}

// Standalone standings view (the "League Standings" shortcut on each league
// group), reusing the same modal shell as the match detail view but without
// a two-team header since there's no specific match involved.
async function openLeagueTableModal(league) {
  document.getElementById("matchModalContent").innerHTML = `
    <div class="match-modal-league">
      ${league_icon(league)}<span>${league}</span><span class="match-modal-country">${LEAGUE_COUNTRY[league] || ""}</span>
    </div>
    <div class="team-modal-section-title">Standings</div>
    <div id="leagueTableBody"><div class="team-no-fixture">Loading…</div></div>`;
  document.getElementById("matchModal").classList.add("open");

  let html;
  try {
    html = await fetchLeagueTableHtml(league, dateKey(new Date()), []);
  } catch (err) {
    html = `<div class="team-no-fixture">Couldn't load the table right now.</div>`;
  }
  const body = document.getElementById("leagueTableBody");
  if (body) body.innerHTML = html;
}

// --- Per-match chat + score prediction (backed by the ChatRoom Durable
// Object in api-proxy/worker.js). Nickname-only identity, stored in
// localStorage so it's asked once and then remembered for every match.
const NICKNAME_KEY = "goalhub_nickname";
let chatSocket = null;
let chatSocketMatchId = null;

function getNickname() {
  return localStorage.getItem(NICKNAME_KEY);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderChatTab(fixture) {
  const body = document.getElementById("matchTabBody");
  const nickname = getNickname();

  if (!nickname) {
    body.innerHTML = `
      <div class="chat-nickname-prompt">
        <p>Pick a nickname to chat and predict scores. No account needed — just remembered on this device.</p>
        <input type="text" id="chatNicknameInput" placeholder="Your nickname" maxlength="24">
        <button onclick="submitNickname()">Join Chat</button>
      </div>`;
    document.getElementById("chatNicknameInput").addEventListener("keydown", e => {
      if (e.key === "Enter") submitNickname();
    });
    return;
  }

  body.innerHTML = `
    <div class="chat-panel">
      <div class="chat-messages" id="chatMessages"><div class="chat-system-msg">Connecting…</div></div>
      <div class="chat-predict-row">
        <span class="chat-predict-label">Predict:</span>
        <input type="number" id="predictHome" min="0" max="30" class="chat-score-input" placeholder="0">
        <span>-</span>
        <input type="number" id="predictAway" min="0" max="30" class="chat-score-input" placeholder="0">
        <button onclick="submitPrediction()">Predict</button>
      </div>
      <div class="chat-input-row">
        <input type="text" id="chatInput" placeholder="Say something…" maxlength="500">
        <button onclick="sendChatMessage()">Send</button>
      </div>
    </div>`;
  document.getElementById("chatInput").addEventListener("keydown", e => {
    if (e.key === "Enter") sendChatMessage();
  });

  connectChatSocket(fixture.id);
  if (chatSocketMatchId === fixture.id && lastChatHistory !== null) paintChatHistory(lastChatHistory);
}

function submitNickname() {
  const input = document.getElementById("chatNicknameInput");
  const name = input.value.trim().slice(0, 24);
  if (!name) return;
  localStorage.setItem(NICKNAME_KEY, name);
  if (!currentMatchFixture) return;
  const activeTab = document.querySelector(".match-tab-btn.active")?.dataset.tab;
  if (activeTab === "motm") renderMotmTab(currentMatchFixture);
  else renderChatTab(currentMatchFixture);
}

// The server only sends "history"/"motm_tally" once, right after connect —
// whichever tab (Chat or MOTM) happens to be visible at that instant
// consumes it. Cache the last copy of each so the *other* tab, opened after
// the socket is already connected, can paint immediately from here instead
// of showing "Loading…" forever waiting for a payload that already came.
let lastChatHistory = null;
let lastMotmVotes = null;

function paintChatHistory(messages) {
  const list = document.getElementById("chatMessages");
  if (!list) return;
  list.innerHTML = messages.length ? "" : `<div class="chat-system-msg">No messages yet — say hello!</div>`;
  messages.forEach(appendChatMessage);
}

function connectChatSocket(matchId) {
  if (chatSocket && chatSocketMatchId === matchId && chatSocket.readyState <= WebSocket.OPEN) return;
  closeChatSocket();
  chatSocketMatchId = matchId;

  const wsUrl = CHAT_WORKER_BASE.replace(/^http/, "ws") + `/chat?match=${encodeURIComponent(matchId)}`;
  const ws = new WebSocket(wsUrl);
  chatSocket = ws;

  ws.onmessage = event => {
    if (chatSocket !== ws) return; // a newer connection has replaced this one
    let data;
    try { data = JSON.parse(event.data); } catch (err) { return; }
    if (data.type === "history") {
      lastChatHistory = data.messages;
      paintChatHistory(data.messages);
    } else if (data.type === "message") {
      appendChatMessage(data.message);
    } else if (data.type === "motm_tally") {
      lastMotmVotes = data.votes;
      renderMotmTally(data.votes);
    }
  };
  ws.onerror = () => {
    if (chatSocket !== ws) return;
    const list = document.getElementById("chatMessages");
    if (list) list.innerHTML = `<div class="chat-system-msg">Couldn't connect to chat right now. Try reopening this tab.</div>`;
  };
}

function closeChatSocket() {
  if (chatSocket) {
    try { chatSocket.close(); } catch (err) { /* already closing */ }
  }
  chatSocket = null;
  chatSocketMatchId = null;
  lastChatHistory = null;
  lastMotmVotes = null;
}

function appendChatMessage(msg) {
  const list = document.getElementById("chatMessages");
  if (!list) return;
  if (list.querySelector(".chat-system-msg")) list.innerHTML = "";

  const time = new Date(msg.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const html = msg.type === "prediction"
    ? `<div class="chat-msg chat-msg-prediction"><span class="chat-msg-nick">🔮 ${escapeHtml(msg.nickname)}</span> predicts <strong>${msg.home_score} - ${msg.away_score}</strong><span class="chat-msg-time">${time}</span></div>`
    : `<div class="chat-msg"><span class="chat-msg-nick">${escapeHtml(msg.nickname)}</span><span class="chat-msg-text">${escapeHtml(msg.text)}</span><span class="chat-msg-time">${time}</span></div>`;
  list.insertAdjacentHTML("beforeend", html);
  list.scrollTop = list.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text || !chatSocket || chatSocket.readyState !== WebSocket.OPEN) return;
  chatSocket.send(JSON.stringify({ type: "chat", nickname: getNickname(), text }));
  input.value = "";
}

function submitPrediction() {
  const homeInput = document.getElementById("predictHome");
  const awayInput = document.getElementById("predictAway");
  const home = homeInput.value;
  const away = awayInput.value;
  if (home === "" || away === "" || !chatSocket || chatSocket.readyState !== WebSocket.OPEN) return;
  chatSocket.send(JSON.stringify({ type: "prediction", nickname: getNickname(), homeScore: Number(home), awayScore: Number(away) }));
  homeInput.value = "";
  awayInput.value = "";
}

// --- Man of the Match voting, on the same per-match WebSocket room as chat
// (see ChatRoom in api-proxy/worker.js). Real starting lineups aren't
// available on TheSportsDB's free tier, so rather than a dropdown of
// players who may or may not have actually played, this is an open
// nomination + live tally — one vote per nickname, re-voting just changes it.
const MOTM_VOTE_KEY_PREFIX = "goalhub_motm_vote_";

function renderMotmTab(fixture) {
  const body = document.getElementById("matchTabBody");
  const nickname = getNickname();

  if (!nickname) {
    body.innerHTML = `
      <div class="chat-nickname-prompt">
        <p>Pick a nickname to vote for Man of the Match. No account needed — just remembered on this device.</p>
        <input type="text" id="chatNicknameInput" placeholder="Your nickname" maxlength="24">
        <button onclick="submitNickname()">Join Chat</button>
      </div>`;
    document.getElementById("chatNicknameInput").addEventListener("keydown", e => {
      if (e.key === "Enter") submitNickname();
    });
    return;
  }

  const myVote = localStorage.getItem(MOTM_VOTE_KEY_PREFIX + fixture.id) || "";
  body.innerHTML = `
    <div class="motm-panel">
      <div class="motm-vote-row">
        <input type="text" id="motmInput" placeholder="Player name…" maxlength="40" value="${escapeHtml(myVote)}">
        <button onclick="submitMotmVote()">Vote</button>
      </div>
      <div class="motm-tally" id="motmTally"><div class="chat-system-msg">Loading votes…</div></div>
    </div>`;
  document.getElementById("motmInput").addEventListener("keydown", e => {
    if (e.key === "Enter") submitMotmVote();
  });

  connectChatSocket(fixture.id);
  if (chatSocketMatchId === fixture.id && lastMotmVotes !== null) renderMotmTally(lastMotmVotes);
}

function submitMotmVote() {
  const input = document.getElementById("motmInput");
  const player = input.value.trim().slice(0, 40);
  if (!player || !chatSocket || chatSocket.readyState !== WebSocket.OPEN) return;
  chatSocket.send(JSON.stringify({ type: "motm", nickname: getNickname(), player }));
  if (currentMatchFixture) localStorage.setItem(MOTM_VOTE_KEY_PREFIX + currentMatchFixture.id, player);
}

function renderMotmTally(votes) {
  const el = document.getElementById("motmTally");
  if (!el) return; // MOTM tab isn't the one currently open
  if (!votes.length) {
    el.innerHTML = `<div class="chat-system-msg">No votes yet — be the first!</div>`;
    return;
  }
  const maxVotes = votes[0].votes;
  el.innerHTML = votes.map(v => `
    <div class="motm-row">
      <span class="motm-player">${escapeHtml(v.player)}</span>
      <div class="motm-bar-track"><div class="motm-bar-fill" style="width:${Math.round((v.votes / maxVotes) * 100)}%"></div></div>
      <span class="motm-count">${v.votes}</span>
    </div>`).join("");
}

async function showMatchTab(tab) {
  const fixture = currentMatchFixture;
  if (!fixture) return;

  document.querySelectorAll(".match-tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  const body = document.getElementById("matchTabBody");

  // Chat and MOTM are both live (the same per-match WebSocket feed), not
  // static HTML we can cache and stamp into innerHTML like the other tabs —
  // they manage their own DOM and share one connection between them.
  if (tab === "chat") {
    renderChatTab(fixture);
    return;
  }
  if (tab === "motm") {
    renderMotmTab(fixture);
    return;
  }
  closeChatSocket(); // leaving chat/MOTM for a static tab — drop the connection

  const cacheKey = `${fixture.id}|${tab}`;
  if (matchTabCache[cacheKey]) {
    body.innerHTML = matchTabCache[cacheKey];
    return;
  }

  body.innerHTML = `<div class="team-no-fixture">Loading…</div>`;

  let html, failed = false;
  try {
    if (tab === "info") html = await renderMatchInfoTab(fixture);
    else if (tab === "lineups") html = await renderMatchLineupsTab(fixture);
    else if (tab === "table") html = await renderMatchTableTab(fixture);
    else if (tab === "h2h") html = await renderMatchH2HTab(fixture);
  } catch (err) {
    // A transient fetch failure (network hiccup, shared free-key rate limit)
    // shouldn't get cached as if it were a real answer — that would leave
    // the tab stuck showing "couldn't load" for the rest of the session
    // even once the underlying API is fine again. Leave it uncached so the
    // next click retries fresh.
    failed = true;
    html = `<div class="no-results">Couldn't load this right now (the free API can be flaky under load). <span class="retry-link" onclick="showMatchTab('${tab}')">Tap to retry</span>.</div>`;
  }

  // Only paint if the user hasn't switched tabs or closed the modal while
  // this fetch was in flight.
  if (currentMatchFixture && currentMatchFixture.id === fixture.id) {
    if (!failed) matchTabCache[cacheKey] = html;
    body.innerHTML = html;
  }
}

// Cache of standings tables keyed by "league|season", reused by both the
// Table tab and this narrative context so a finished-match sentence doesn't
// trigger its own redundant fetch on top of one the Table tab already made.
const standingsTableCache = {};

async function getStandingsTable(league, dateStr) {
  const competition = STANDINGS_LEAGUES[league];
  if (!competition) return null; // only the 8 leagues with full (non-partial) standings
  const season = seasonStringForLeague(league, dateStr).split("-")[0];
  const cacheKey = `${league}|${season}`;
  if (standingsTableCache[cacheKey]) return standingsTableCache[cacheKey];
  try {
    const data = await fetchJsonWithRetry(`${CHAT_WORKER_BASE}/standings?competition=${competition}&season=${season}`);
    const table = data.table || [];
    standingsTableCache[cacheKey] = table;
    return table;
  } catch (err) {
    return null; // supplementary context — a failed fetch just means we skip it
  }
}

function findStandingsRow(table, teamName) {
  const normalized = normalizeTeamName(teamName);
  return table.find(row => normalizeTeamName(row.team.name) === normalized || normalizeTeamName(row.team.shortName) === normalized);
}

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Appends real table-position context to a finished match's narrative —
// "sit 2nd with 85 points", "3 points off the top" — using the standings
// snapshot we already have for the 8 fully-covered leagues. Never guesses
// at a position; if the team isn't found in that snapshot (name mismatch,
// fetch failure, uncovered league) it silently adds nothing rather than
// fabricating a league position.
async function appendTableContext(sentence, fixture, winnerName) {
  const table = await getStandingsTable(fixture.league, fixture.date);
  if (!table || table.length === 0) return sentence;
  const row = findStandingsRow(table, winnerName);
  if (!row) return sentence;

  if (row.position === 1) {
    return `${sentence} ${winnerName} sit top of the table with ${row.points} points.`;
  }
  const leaderPoints = table[0].points;
  const gap = leaderPoints - row.points;
  const gapPhrase = gap === 0
    ? "level on points with the top of the table"
    : `${gap} point${gap === 1 ? "" : "s"} off the top`;
  return `${sentence} ${winnerName} sit ${ordinal(row.position)} with ${row.points} points, ${gapPhrase}.`;
}

// Rule-based match narrative — a plain-English sentence built only from
// data we actually have (score, status, round, and — for finished matches
// in leagues with full standings — current table position). Not an AI
// call, and not guessing at events we can't see: TheSportsDB's free tier
// gives us no half-time score or goal/card timeline, so this deliberately
// never claims a "comeback" or a "red card changes everything" — only what
// the final or current scoreline (and real standings) actually tell us.
async function matchNarrative(fixture) {
  const { home, away, homeScore, awayScore, status, round } = fixture;
  const hasScore = homeScore !== null && homeScore !== undefined && awayScore !== null && awayScore !== undefined;

  if (isFinishedStatus(status) && hasScore) {
    const scoreline = `${homeScore}-${awayScore}`;
    if (homeScore === awayScore) {
      return homeScore === 0
        ? `${home.name} and ${away.name} played out a goalless draw.`
        : `${home.name} and ${away.name} shared the points in a ${scoreline} draw.`;
    }
    const margin = Math.abs(homeScore - awayScore);
    const winner = homeScore > awayScore ? home.name : away.name;
    const loser = homeScore > awayScore ? away.name : home.name;
    let sentence;
    if (margin >= 3) sentence = `${winner} thrashed ${loser} ${scoreline}.`;
    else if (margin === 2) sentence = `${winner} beat ${loser} comfortably, ${scoreline}.`;
    else sentence = `${winner} edged past ${loser} ${scoreline}.`;
    return appendTableContext(sentence, fixture, winner);
  }

  if (isLiveStatus(status) && hasScore) {
    const label = (STATUS_LABELS[status] || status || "live").toLowerCase();
    if (homeScore === awayScore) {
      return homeScore === 0
        ? `Still goalless between ${home.name} and ${away.name}, ${label}.`
        : `${home.name} and ${away.name} are level at ${homeScore}-${awayScore}, ${label}.`;
    }
    const leader = homeScore > awayScore ? home.name : away.name;
    const trailer = homeScore > awayScore ? away.name : home.name;
    return `${leader} lead ${trailer} ${homeScore}-${awayScore}, ${label}.`;
  }

  return `${home.name} host ${away.name}${round ? ` in Round ${round}` : ""}.`;
}

const venueCache = {};
async function getVenueCapacity(venueId) {
  if (!venueId) return null;
  if (venueId in venueCache) return venueCache[venueId];
  try {
    const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/lookupvenue.php?id=${venueId}`);
    const v = (data.venues || [])[0];
    const capacity = v && v.intCapacity ? Number(v.intCapacity) : null;
    venueCache[venueId] = capacity;
    return capacity;
  } catch (err) {
    return null; // supplementary — a failed lookup just means we skip it
  }
}

async function renderMatchInfoTab(fixture) {
  const [narrative, capacity] = await Promise.all([
    matchNarrative(fixture),
    getVenueCapacity(fixture.venueId)
  ]);
  return `
    <div class="match-narrative">${narrative}</div>
    <div class="match-info-card">
      <div class="match-info-row"><span class="match-info-icon">📅</span>${formatApiDate(fixture.date)}${fixture.time ? " · " + fixture.time : ""}</div>
      ${fixture.venue ? `<div class="match-info-row"><span class="match-info-icon">📍</span>${fixture.venue}${capacity ? ` · Capacity ${capacity.toLocaleString()}` : ""}</div>` : ""}
      ${fixture.round ? `<div class="match-info-row"><span class="match-info-icon">🏆</span>Round ${fixture.round}</div>` : ""}
    </div>`;
}

async function renderMatchLineupsTab(fixture) {
  const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/lookuplineup.php?id=${fixture.id}`);
  const players = Array.isArray(data.lineup) ? data.lineup : [];
  if (players.length === 0) {
    return `<div class="team-no-fixture">Line-ups aren't published for this match on our free data source.</div>`;
  }
  const byTeam = { home: [], away: [] };
  players.forEach(p => {
    const side = p.strHome === "Yes" ? "home" : "away";
    byTeam[side].push(p);
  });
  const renderPlayer = p => `
    <div class="lineup-player">
      ${badgeImg(p.strCutout || p.strThumb || "", p.strPlayer, "lineup-photo")}
      ${p.strSquadNumber ? `<span class="lineup-number">${p.strSquadNumber}</span>` : ""}
      <span class="lineup-name">${p.strPlayer}</span>
      <span class="lineup-position">${p.strPosition || ""}</span>
    </div>`;
  const renderSide = (name, list) => `
    <div class="lineup-side">
      <div class="lineup-side-title">${name}</div>
      ${list.length ? list.map(renderPlayer).join("") : `<div class="team-no-fixture">None listed.</div>`}
    </div>`;
  // The free tier only ever surfaces a handful of lineup entries total
  // (across both teams combined) when it has any lineup data at all for
  // a match — nowhere near a full XI. Say so rather than presenting a
  // 2-5 player list as if it were the whole team sheet.
  return `
    <div class="h2h-note">Our free data source only has partial line-up data for this match — not the full squad.</div>
    <div class="lineup-grid">${renderSide(fixture.home.name, byTeam.home)}${renderSide(fixture.away.name, byTeam.away)}</div>`;
}

// football-data.org team names ("Arsenal FC") don't match TheSportsDB's
// ("Arsenal") or our own roster's, so strip common club-suffix noise before
// comparing when deciding which row to highlight.
function normalizeTeamName(name) {
  return (name || "")
    .toLowerCase()
    .replace(/\b(fc|cf|afc|sc|cd|ac|and)\b/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

async function fetchFullStandingsHtml(league, dateStr, highlightNames) {
  const competition = STANDINGS_LEAGUES[league];
  const season = seasonStringForLeague(league, dateStr).split("-")[0];
  const normalizedHighlights = highlightNames.map(normalizeTeamName);
  const data = await fetchJsonWithRetry(`${CHAT_WORKER_BASE}/standings?competition=${competition}&season=${season}`);
  const table = data.table || [];
  if (table.length === 0) {
    return `<div class="team-no-fixture">Standings aren't available for this competition right now.</div>`;
  }
  const rows = table.map(row => {
    const isHighlighted = normalizedHighlights.includes(normalizeTeamName(row.team.name)) || normalizedHighlights.includes(normalizeTeamName(row.team.shortName));
    return `
      <div class="table-row full${isHighlighted ? " table-row-highlight" : ""}">
        <span class="table-rank">${row.position}</span>
        <span class="table-team">${badgeImg(row.team.crest, row.team.name, "")}${row.team.shortName || row.team.name}</span>
        <span class="table-stat">${row.playedGames}</span>
        <span class="table-stat">${row.won}</span>
        <span class="table-stat">${row.draw}</span>
        <span class="table-stat">${row.lost}</span>
        <span class="table-stat">${row.goalDifference}</span>
        <span class="table-stat table-pts">${row.points}</span>
      </div>`;
  }).join("");
  return `
    <div class="table-header-row full">
      <span class="table-rank">#</span>
      <span class="table-team">Team</span>
      <span class="table-stat">P</span>
      <span class="table-stat">W</span>
      <span class="table-stat">D</span>
      <span class="table-stat">L</span>
      <span class="table-stat">GD</span>
      <span class="table-stat table-pts">Pts</span>
    </div>
    <div class="table-rows">${rows}</div>`;
}

function renderManualStandingsHtml(rows, highlightNames) {
  const body = rows.map(row => {
    const isHighlighted = highlightNames.includes(row.team);
    return `
      <div class="table-row full${isHighlighted ? " table-row-highlight" : ""}">
        <span class="table-rank">${row.pos}</span>
        <span class="table-team">${badgeImg(resolveLogo("", row.team), row.team, "")}${row.team}</span>
        <span class="table-stat">${row.p}</span>
        <span class="table-stat">${row.w}</span>
        <span class="table-stat">${row.d}</span>
        <span class="table-stat">${row.l}</span>
        <span class="table-stat">${row.gd}</span>
        <span class="table-stat table-pts">${row.pts}</span>
      </div>`;
  }).join("");
  return `
    <div class="table-header-row full">
      <span class="table-rank">#</span>
      <span class="table-team">Team</span>
      <span class="table-stat">P</span>
      <span class="table-stat">W</span>
      <span class="table-stat">D</span>
      <span class="table-stat">L</span>
      <span class="table-stat">GD</span>
      <span class="table-stat table-pts">Pts</span>
    </div>
    <div class="table-rows">${body}</div>`;
}

async function fetchLeagueTableHtml(league, dateStr, highlightNames) {
  if (STANDINGS_LEAGUES[league]) return fetchFullStandingsHtml(league, dateStr, highlightNames);
  if (MANUAL_STANDINGS[league] && MANUAL_STANDINGS[league].length > 0) {
    return renderManualStandingsHtml(MANUAL_STANDINGS[league], highlightNames);
  }
  const leagueId = LEAGUE_IDS[league];
  const season = seasonStringForLeague(league, dateStr);
  const data = await fetchJsonWithRetry(`${SPORTSDB_BASE}/lookuptable.php?l=${leagueId}&s=${season}`);
  const table = data.table || [];
  if (table.length === 0) {
    return `<div class="team-no-fixture">Standings aren't available for this competition right now.</div>`;
  }
  const includesHighlighted = highlightNames.length === 0 || table.some(row => highlightNames.includes(row.strTeam));
  // The free tier truncates this endpoint to a handful of rows rather than
  // the full 18-20 team table, so highlighted teams often won't appear at
  // all (especially early-season, sitting on 0 points below the cutoff) —
  // say so plainly instead of presenting a partial table as complete.
  const truncationNote = !includesHighlighted
    ? `<div class="h2h-note">Our free data source only returns a partial table — ${highlightNames.join(" and ")} ${highlightNames.length > 1 ? "aren't" : "isn't"} in the portion shown below.</div>`
    : "";
  const rows = table.map(row => {
    const isHighlighted = highlightNames.includes(row.strTeam);
    return `
      <div class="table-row${isHighlighted ? " table-row-highlight" : ""}">
        <span class="table-rank">${row.intRank}</span>
        <span class="table-team">${badgeImg(row.strBadge ? row.strBadge.replace("/tiny", "") : "", row.strTeam, "")}${row.strTeam}</span>
        <span class="table-stat">${row.intPlayed}</span>
        <span class="table-stat">${row.intGoalDifference}</span>
        <span class="table-stat table-pts">${row.intPoints}</span>
      </div>`;
  }).join("");
  return `
    ${truncationNote}
    <div class="table-header-row">
      <span class="table-rank">#</span>
      <span class="table-team">Team</span>
      <span class="table-stat">P</span>
      <span class="table-stat">GD</span>
      <span class="table-stat table-pts">Pts</span>
    </div>
    <div class="table-rows">${rows}</div>`;
}

async function renderMatchTableTab(fixture) {
  return fetchLeagueTableHtml(fixture.league, fixture.date, [fixture.home.name, fixture.away.name]);
}

function renderH2HResultRow(teamName, r) {
  if (!r) return `<div class="team-no-fixture">No recent result for ${teamName}.</div>`;
  const homeLogo = resolveLogo(r.strHomeTeamBadge, r.strHomeTeam);
  const awayLogo = resolveLogo(r.strAwayTeamBadge, r.strAwayTeam);
  return `
    <div class="team-result-row">
      <div class="team-result-date">${formatApiDate(r.dateEvent)}</div>
      <div class="team-result-teams">
        <span class="team-result-team">${badgeImg(homeLogo, r.strHomeTeam, "")}${r.strHomeTeam}</span>
        <span class="team-result-vs">vs</span>
        <span class="team-result-team">${badgeImg(awayLogo, r.strAwayTeam, "")}${r.strAwayTeam}</span>
      </div>
      <div class="team-result-score">${r.intHomeScore} - ${r.intAwayScore}</div>
    </div>`;
}

// W/D/L for a specific team from one of their own past results (as
// returned by eventslast.php — a result already known to involve them).
function outcomeForTeam(result, teamId) {
  const isHome = String(result.idHomeTeam) === String(teamId);
  const own = Number(isHome ? result.intHomeScore : result.intAwayScore);
  const opp = Number(isHome ? result.intAwayScore : result.intHomeScore);
  if (own > opp) return "W";
  if (own < opp) return "L";
  return "D";
}

async function renderFormGuide(fixture, homeResultsFull, awayResultsFull) {
  const table = await getStandingsTable(fixture.league, fixture.date);
  const homeResults = homeResultsFull.slice(0, 5).reverse();
  const awayResults = awayResultsFull.slice(0, 5).reverse();

  const positionTag = teamName => {
    if (!table) return "";
    const row = findStandingsRow(table, teamName);
    return row ? `<span class="form-position">${ordinal(row.position)}</span>` : "";
  };

  const renderSide = (team, results) => `
    <div class="form-side">
      <div class="form-side-header">${badgeImg(team.logo, team.name, "")}<span>${team.name}</span>${positionTag(team.name)}</div>
      <div class="form-badges">
        ${results.length ? results.map(r => `<span class="form-badge form-${outcomeForTeam(r, team.id).toLowerCase()}">${outcomeForTeam(r, team.id)}</span>`).join("") : `<span class="form-badge-empty">No recent results</span>`}
      </div>
    </div>`;

  return `
    <div class="team-modal-section-title">Recent Form</div>
    <div class="form-guide">
      ${renderSide(fixture.home, homeResults)}
      ${renderSide(fixture.away, awayResults)}
    </div>`;
}

async function renderMatchH2HTab(fixture) {
  const [homeData, awayData] = await Promise.all([
    fetchJsonWithRetry(`${SPORTSDB_BASE}/eventslast.php?id=${fixture.home.id}`),
    fetchJsonWithRetry(`${SPORTSDB_BASE}/eventslast.php?id=${fixture.away.id}`)
  ]);
  const homeResults = homeData.results || [];
  const awayResults = awayData.results || [];
  const formHtml = await renderFormGuide(fixture, homeResults, awayResults);
  const note = `<div class="h2h-note">Our data source doesn't provide multi-season head-to-head history — here's each team's most recent result instead.</div>`;
  return formHtml + note + renderH2HResultRow(fixture.home.name, homeResults[0]) + renderH2HResultRow(fixture.away.name, awayResults[0]);
}

document.getElementById("prevDay").addEventListener("click", () => changeDate(-1));
document.getElementById("nextDay").addEventListener("click", () => changeDate(1));

loadFixturesAndRender();
