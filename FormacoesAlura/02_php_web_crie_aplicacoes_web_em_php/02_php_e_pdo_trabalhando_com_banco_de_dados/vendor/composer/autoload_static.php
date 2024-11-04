<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1160f1d07211074ab4339601d62ccd1d
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Alura\\Pdo\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Alura\\Pdo\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Alura\\Pdo\\Domain\\Model\\Student' => __DIR__ . '/../..' . '/src/Domain/Model/Student.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1160f1d07211074ab4339601d62ccd1d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1160f1d07211074ab4339601d62ccd1d::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit1160f1d07211074ab4339601d62ccd1d::$classMap;

        }, null, ClassLoader::class);
    }
}