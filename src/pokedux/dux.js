let beaks_to_try_on = [
    '../../img/pokebeak.png',
    '../../img/a perfectly normal beak.png',
    '../../img/https://inst-2.cdn.shockers.de/hs_cdn/out/pictures/generated/product/1/350_650_100/entenschnabel-party-accessoire-enten-kostuem-donald-duck-verkleidung-8800364.jpg',
];

let beak = beaks_to_try_on[0];

document.querySelector('div.beak > img').setAttribute('src', beak);
document.querySelector('img.beak').setAttribute('src', beak);
document.querySelector('img.beakimg').setAttribute('src', beak);
