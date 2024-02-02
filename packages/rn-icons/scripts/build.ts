import path from 'path';
import { performance } from 'perf_hooks';
import { buildPackageExports } from './logics';
import { icons } from '../src/icons';
import * as taskCommon from './task_common';
import * as taskAll from './task_all';
import * as taskFiles from './task_files';
import { TaskContext } from './_types';

// file path
const _rootDir = path.resolve(__dirname, '../');

async function task(name: string, fn: () => Promise<void> | void) {
  const start = performance.now();
  console.log(`================= ${name} =================`);
  await fn();
  const end = performance.now();
  console.log(`${name}: `, Math.floor(end - start) / 1000, 'sec\n\n');
}

async function main() {
  try {
    // @rn-icons/all
    const allOpt: TaskContext = {
      rootDir: _rootDir,
      DIST: path.resolve(_rootDir, '../_rn-icons_all'),
      LIB: path.resolve(_rootDir, '../_rn-icons_all/lib'),
    };
    await task('@rn-icons/all initialize', async () => {
      await taskAll.dirInit(allOpt);
      await taskCommon.writeEntryPoints(allOpt);
      await taskCommon.writeIconsManifest(allOpt);
      await taskCommon.writeLicense(allOpt);
      await taskCommon.writePackageJson(
        { name: 'rn-icons', exports: buildPackageExports(icons) },
        allOpt
      );
      await taskCommon.copyReadme(allOpt);
    });
    await task('@rn-icons/all write icons', async () => {
      await Promise.all(
        icons.map((icon) => taskAll.writeIconModule(icon, allOpt))
      );
    });

    // rn-icons-all
    const filesOpt: TaskContext = {
      rootDir: _rootDir,
      DIST: path.resolve(_rootDir, '../_rn-icons_all-files'),
      LIB: path.resolve(_rootDir, '../_rn-icons_all-files/lib'),
    };
    await task('rn-icons-all initialize', async () => {
      await taskFiles.dirInit(filesOpt);
      await taskCommon.writeEntryPoints(filesOpt);
      await taskCommon.writeIconsManifest(filesOpt);
      await taskCommon.writeLicense(filesOpt);
      await taskCommon.writePackageJson({ name: 'rn-icons-all' }, filesOpt);
      await taskCommon.copyReadme(filesOpt);
    });
    await task('rn-icons-all write icons', async () => {
      await Promise.all(
        icons.map((icon) => taskFiles.writeIconModuleFiles(icon, filesOpt))
      );
    });

    // write to VERSIONS file
    await task('rn-icons_builders write icon versions', async () => {
      await taskCommon.writeIconVersions(filesOpt);
    });

    // write to d.ts files
    await task('rn-icons_builders build common library', async () => {
      await taskCommon.buildLib(filesOpt);
      await taskCommon.copyLib(allOpt);
      await taskCommon.copyLib(filesOpt);
    });

    console.log('done');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main();

export {};
