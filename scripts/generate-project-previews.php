<?php

$files = array_merge(
    glob(__DIR__ . '/../public/images/*.png'),
    glob(__DIR__ . '/../public/images/projects/*.png')
);

foreach ($files as $file) {
    $source = imagecreatefrompng($file);
    $sourceWidth = imagesx($source);
    $sourceHeight = imagesy($source);
    $width = min(1200, $sourceWidth);
    $height = (int) round($sourceHeight * $width / $sourceWidth);
    $preview = imagecreatetruecolor($width, $height);

    imagecopyresampled(
        $preview,
        $source,
        0,
        0,
        0,
        0,
        $width,
        $height,
        $sourceWidth,
        $sourceHeight
    );

    $output = substr($file, 0, -4) . '.webp';
    imagewebp($preview, $output, 78);
    imagedestroy($source);
    imagedestroy($preview);

    printf(
        "%s: %s -> %s bytes\n",
        basename($file),
        filesize($file),
        filesize($output)
    );
}