const DB_NAME = `queue`;

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: true,
};

const USER_BADGES = Object.freeze([
    "Newbie",
    "Sniper",
    "Rusher",
    "Assaulter",
]);

const GAMES = Object.freeze([
    "Battlegrounds Mobile India",
    "Call of Duty Mobile",
    "Free Fire",
    "Asphalt 9",
    "Valorant",
]);

const TOURNAMENT_TYPES = Object.freeze([
    "Solo",
    "Duo",
    "Squad",
]);

export {
    DB_NAME,
    COOKIE_OPTIONS,
    USER_BADGES,
    GAMES,
    TOURNAMENT_TYPES,
};