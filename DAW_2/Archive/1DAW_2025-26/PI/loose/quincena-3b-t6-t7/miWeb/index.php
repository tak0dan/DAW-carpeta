<?php

declare(strict_types=1);

require_once __DIR__ . '/includes/valenbici.php';

$lang = valenbici_lang();
$messages = valenbici_messages($lang);
$switchLang = valenbici_switch_lang($lang);
$result = load_or_refresh_valenbici_data(true);
$stations = $result['stations'];
$totalStations = count($stations);
$totalBikes = array_sum(array_column($stations, 'available'));
$totalFree = array_sum(array_column($stations, 'free'));
$lastUpdated = $totalStations > 0 ? (string) max(array_column($stations, 'updated_at')) : $messages['summary_no_data'];
?>
<!DOCTYPE html>
<html lang="<?= htmlspecialchars($lang, ENT_QUOTES, 'UTF-8') ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($messages['site_title'], ENT_QUOTES, 'UTF-8') ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="hero">
        <div class="hero__content">
            <p class="eyebrow">Proyecto intermodular DAW</p>
            <h1><?= htmlspecialchars($messages['home_title'], ENT_QUOTES, 'UTF-8') ?></h1>
            <p class="hero__intro"><?= htmlspecialchars($messages['home_intro'], ENT_QUOTES, 'UTF-8') ?></p>
            <div class="hero__actions">
                <a class="button button--primary" href="<?= htmlspecialchars(valenbici_build_url('mapearbicis.php', $lang), ENT_QUOTES, 'UTF-8') ?>">
                    <?= htmlspecialchars($messages['go_map'], ENT_QUOTES, 'UTF-8') ?>
                </a>
                <a class="button button--secondary" href="<?= htmlspecialchars(valenbici_build_url('index.php', $switchLang), ENT_QUOTES, 'UTF-8') ?>">
                    <?= htmlspecialchars($messages['switch_label'], ENT_QUOTES, 'UTF-8') ?>
                </a>
            </div>
        </div>
    </header>

    <main class="layout">
        <section class="metrics">
            <article class="metric">
                <span><?= htmlspecialchars($messages['summary_total'], ENT_QUOTES, 'UTF-8') ?></span>
                <strong><?= $totalStations ?></strong>
            </article>
            <article class="metric">
                <span><?= htmlspecialchars($messages['summary_bikes'], ENT_QUOTES, 'UTF-8') ?></span>
                <strong><?= $totalBikes ?></strong>
            </article>
            <article class="metric">
                <span><?= htmlspecialchars($messages['summary_slots'], ENT_QUOTES, 'UTF-8') ?></span>
                <strong><?= $totalFree ?></strong>
            </article>
            <article class="metric">
                <span><?= htmlspecialchars($messages['summary_updated'], ENT_QUOTES, 'UTF-8') ?></span>
                <strong><?= htmlspecialchars($lastUpdated, ENT_QUOTES, 'UTF-8') ?></strong>
            </article>
        </section>

        <?php if ($result['error'] !== null): ?>
            <section class="panel panel--error">
                <h2><?= htmlspecialchars($messages['error_title'], ENT_QUOTES, 'UTF-8') ?></h2>
                <p><?= htmlspecialchars($result['error'], ENT_QUOTES, 'UTF-8') ?></p>
            </section>
        <?php else: ?>
            <section class="panel panel--success">
                <p><?= htmlspecialchars($messages['json_saved'], ENT_QUOTES, 'UTF-8') ?>: <code><?= htmlspecialchars($result['file_path'], ENT_QUOTES, 'UTF-8') ?></code></p>
            </section>
        <?php endif; ?>

        <section class="panel">
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th><?= htmlspecialchars($messages['table_address'], ENT_QUOTES, 'UTF-8') ?></th>
                            <th><?= htmlspecialchars($messages['table_number'], ENT_QUOTES, 'UTF-8') ?></th>
                            <th><?= htmlspecialchars($messages['table_open'], ENT_QUOTES, 'UTF-8') ?></th>
                            <th><?= htmlspecialchars($messages['table_available'], ENT_QUOTES, 'UTF-8') ?></th>
                            <th><?= htmlspecialchars($messages['table_free'], ENT_QUOTES, 'UTF-8') ?></th>
                            <th><?= htmlspecialchars($messages['table_total'], ENT_QUOTES, 'UTF-8') ?></th>
                            <th><?= htmlspecialchars($messages['table_updated'], ENT_QUOTES, 'UTF-8') ?></th>
                            <th><?= htmlspecialchars($messages['table_lat'], ENT_QUOTES, 'UTF-8') ?></th>
                            <th><?= htmlspecialchars($messages['table_lon'], ENT_QUOTES, 'UTF-8') ?></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($stations as $station): ?>
                            <tr>
                                <td><?= htmlspecialchars((string) $station['address'], ENT_QUOTES, 'UTF-8') ?></td>
                                <td><?= (int) $station['number'] ?></td>
                                <td><?= htmlspecialchars($station['open'] ? $messages['yes'] : $messages['no'], ENT_QUOTES, 'UTF-8') ?></td>
                                <td><?= (int) $station['available'] ?></td>
                                <td><?= (int) $station['free'] ?></td>
                                <td><?= (int) $station['total'] ?></td>
                                <td><?= htmlspecialchars((string) $station['updated_at'], ENT_QUOTES, 'UTF-8') ?></td>
                                <td><?= htmlspecialchars((string) $station['latitude'], ENT_QUOTES, 'UTF-8') ?></td>
                                <td><?= htmlspecialchars((string) $station['longitude'], ENT_QUOTES, 'UTF-8') ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </section>
    </main>

    <footer class="footer">
        <p><?= htmlspecialchars($messages['footer_text'], ENT_QUOTES, 'UTF-8') ?></p>
    </footer>
</body>
</html>
