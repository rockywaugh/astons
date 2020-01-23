<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit13e565933c83082d64e350488911b595
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit13e565933c83082d64e350488911b595::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit13e565933c83082d64e350488911b595::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
