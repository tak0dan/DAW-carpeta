<?php

declare(strict_types=1);

require_once __DIR__ . '/includes/valenbici.php';

$lang = valenbici_lang();
$messages = valenbici_messages($lang);
$switchLang = valenbici_switch_lang($lang);
$result = load_or_refresh_valenbici_data(false);
$stations = array_values($result['stations']);
$stationsJson = json_encode($stations, JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
?>
<!DOCTYPE html>
<html lang="<?= htmlspecialchars($lang, ENT_QUOTES, 'UTF-8') ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($messages['map_title'], ENT_QUOTES, 'UTF-8') ?></title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="">
</head>
<body>
    <header class="hero hero--compact">
        <div class="hero__content">
            <p class="eyebrow">Leaflet + data.json</p>
            <h1><?= htmlspecialchars($messages['map_title'], ENT_QUOTES, 'UTF-8') ?></h1>
            <p class="hero__intro"><?= htmlspecialchars($messages['map_intro'], ENT_QUOTES, 'UTF-8') ?></p>
            <div class="hero__actions">
                <a class="button button--primary" href="<?= htmlspecialchars(valenbici_build_url('index.php', $lang), ENT_QUOTES, 'UTF-8') ?>">
                    <?= htmlspecialchars($messages['go_table'], ENT_QUOTES, 'UTF-8') ?>
                </a>
                <a class="button button--secondary" href="<?= htmlspecialchars(valenbici_build_url('mapearbicis.php', $switchLang), ENT_QUOTES, 'UTF-8') ?>">
                    <?= htmlspecialchars($messages['switch_label'], ENT_QUOTES, 'UTF-8') ?>
                </a>
            </div>
        </div>
    </header>

    <main class="layout layout--map">
        <?php if ($result['error'] !== null): ?>
            <section class="panel panel--error">
                <h2><?= htmlspecialchars($messages['error_title'], ENT_QUOTES, 'UTF-8') ?></h2>
                <p><?= htmlspecialchars($result['error'], ENT_QUOTES, 'UTF-8') ?></p>
            </section>
        <?php elseif ($stations === []): ?>
            <section class="panel panel--error">
                <p><?= htmlspecialchars($messages['map_empty'], ENT_QUOTES, 'UTF-8') ?></p>
            </section>
        <?php else: ?>
            <aside class="panel sidebar">
                <h2><?= htmlspecialchars($messages['summary_total'], ENT_QUOTES, 'UTF-8') ?>: <?= count($stations) ?></h2>
                <ul class="station-list">
                    <?php foreach ($stations as $station): ?>
                        <li data-number="<?= (int) $station['number'] ?>">
                            <strong>#<?= (int) $station['number'] ?></strong>
                            <span><?= htmlspecialchars((string) $station['address'], ENT_QUOTES, 'UTF-8') ?></span>
                            <small><?= htmlspecialchars($messages['table_available'], ENT_QUOTES, 'UTF-8') ?>: <?= (int) $station['available'] ?> | <?= htmlspecialchars($messages['table_free'], ENT_QUOTES, 'UTF-8') ?>: <?= (int) $station['free'] ?></small>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </aside>
            <section class="panel map-panel">
                <div id="map"></div>
            </section>
        <?php endif; ?>
    </main>

    <footer class="footer">
        <p><?= htmlspecialchars($messages['footer_text'], ENT_QUOTES, 'UTF-8') ?></p>
    </footer>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin=""></script>
    <script>
        const stations = <?= $stationsJson ?: '[]' ?>;

        if (stations.length > 0) {
            const map = L.map('map');
            const markers = {};
            const markerList = [];
            const bikesLabel = <?= json_encode($messages['popup_bikes'], JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) ?>;
            const freeLabel = <?= json_encode($messages['popup_free'], JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) ?>;

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            stations.forEach((station) => {
                const marker = L.marker([station.latitude, station.longitude]).addTo(map);
                const popupHtml =
                    `<strong>#${station.number}</strong><br>${station.address}<br>` +
                    `${bikesLabel}: ${station.available} | ${freeLabel}: ${station.free}`;
                marker.bindPopup(popupHtml);

                marker.on('click', () => {
                    document.querySelectorAll('.station-list li').forEach((el) => {
                        el.classList.remove('station-list--active');
                    });
                    const li = document.querySelector(`.station-list li[data-number="${station.number}"]`);
                    if (li) {
                        li.classList.add('station-list--active');
                        li.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                });

                markers[station.number] = marker;
                markerList.push(marker);
            });

            document.querySelectorAll('.station-list li').forEach((li) => {
                li.addEventListener('click', () => {
                    const num = parseInt(li.getAttribute('data-number'), 10);
                    const marker = markers[num];
                    if (marker) {
                        document.querySelectorAll('.station-list li').forEach((el) => {
                            el.classList.remove('station-list--active');
                        });
                        li.classList.add('station-list--active');
                        map.setView(marker.getLatLng(), 16);
                        marker.openPopup();
                    }
                });
            });

            const group = L.featureGroup(markerList);
            map.fitBounds(group.getBounds().pad(0.1));
        }
    </script>
</body>
</html>
