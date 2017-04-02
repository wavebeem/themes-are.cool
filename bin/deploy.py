#!/usr/bin/env python3
"""
Usage:
$ ./bin/deploy.py
$ ./bin/deploy.py -p
"""


import subprocess
from argparse import ArgumentParser


CF_DISTRO = 'E93Z7L6U42FM7'
S3_DEV = 's3://dev.mockbrian.com'
S3_PROD = 's3://slackthemesare.cool'


def run(*args, **kwargs):
    """Run a command using var args"""
    return subprocess.check_call(args, **kwargs)


def build():
    """Invoke yarn build"""
    run('yarn', 'build')


def sync(bucket):
    """Sync to a specified S3 bucket"""
    run(
        'aws', 's3', 'sync',
        '--acl', 'public-read',
        '_build/',
        bucket
    )


def invalidate(distro):
    """Invalidate a given Cloudfront distribution"""
    run(
        'aws', 'cloudfront', 'create-invalidation',
        '--distribution-id', distro,
        '--paths', '/*'
    )


def main():
    """Just the main..."""
    parser = ArgumentParser(description='Deploys slackthemesare.cool')
    parser.add_argument(
        '-p', '--production',
        action='store_true',
        help='deploy to production'
    )
    args = parser.parse_args()
    build()
    if args.production:
        sync(S3_PROD)
        invalidate(CF_DISTRO)
    else:
        sync(S3_DEV)


main()
