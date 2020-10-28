var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, checkAvailability, cordovaPropertyGet, cordovaPropertySet, getPromise } from '@ionic-native/core';
var FileOriginal = /** @class */ (function (_super) {
    __extends(FileOriginal, _super);
    function FileOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    FileOriginal.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    FileOriginal.prototype.checkDir = function (path, dir) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dir)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var fullPath = path + dir;
                return _this.resolveDirectoryUrl(fullPath).then(function () {
                    return true;
                });
            }
        })();
    };
    FileOriginal.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getDirectory(fse, dirName, options);
                });
            }
        })();
    };
    FileOriginal.prototype.removeDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.remove(de);
                });
            }
        })();
    };
    FileOriginal.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                newDirName = newDirName || dirName;
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                        return _this.move(srcde, destenation, newDirName);
                    });
                });
            }
        })();
    };
    FileOriginal.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcde, deste, newDirName);
                    });
                });
            }
        })();
    };
    FileOriginal.prototype.listDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, {
                        create: false,
                        exclusive: false,
                    });
                })
                    .then(function (de) {
                    var reader = de.createReader();
                    return _this.readEntries(reader);
                });
            }
        })();
    };
    FileOriginal.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.rimraf(de);
                });
            }
        })();
    };
    FileOriginal.prototype.checkFile = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(file)) {
                    var err = new FileError(5);
                    err.message = 'file cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                    if (fse.isFile) {
                        return true;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a file';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    FileOriginal.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getFile(fse, fileName, options);
                });
            }
        })();
    };
    FileOriginal.prototype.removeFile = function (path, fileName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (fe) {
                    return _this.remove(fe);
                });
            }
        })();
    };
    FileOriginal.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var getFileOpts = {
                    create: !options.append,
                    exclusive: !options.replace,
                };
                return _this.resolveDirectoryUrl(path)
                    .then(function (directoryEntry) {
                    return _this.getFile(directoryEntry, fileName, getFileOpts);
                })
                    .then(function (fileEntry) {
                    return _this.writeFileEntry(fileEntry, text, options);
                });
            }
        })();
    };
    /**
     * Write content to FileEntry.
     * @hidden
     * Write to an existing file.
     * @param {FileEntry} fe file entry object
     * @param {string | Blob | ArrayBuffer} text text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    FileOriginal.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    FileOriginal.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    FileOriginal.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    FileOriginal.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    FileOriginal.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    FileOriginal.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    FileOriginal.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.move(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    FileOriginal.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    /**
     * @hidden
     */
    FileOriginal.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    FileOriginal.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    try {
                        window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                            resolve(entry);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    FileOriginal.prototype.resolveDirectoryUrl = function (directoryUrl) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                    if (de.isDirectory) {
                        return de;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a directory';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    FileOriginal.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getDirectory(directoryName, flags, function (de) {
                            resolve(de);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    FileOriginal.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getFile(fileName, flags, resolve, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    FileOriginal.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return getPromise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * @hidden
     */
    FileOriginal.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    FileOriginal.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    FileOriginal.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    FileOriginal.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    FileOriginal.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    FileOriginal.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    FileOriginal.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    FileOriginal.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return getPromise(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    Object.defineProperty(FileOriginal.prototype, "applicationDirectory", {
        get: function () { return cordovaPropertyGet(this, "applicationDirectory"); },
        set: function (value) { cordovaPropertySet(this, "applicationDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "applicationStorageDirectory", {
        get: function () { return cordovaPropertyGet(this, "applicationStorageDirectory"); },
        set: function (value) { cordovaPropertySet(this, "applicationStorageDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "dataDirectory", {
        get: function () { return cordovaPropertyGet(this, "dataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "dataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "cacheDirectory", {
        get: function () { return cordovaPropertyGet(this, "cacheDirectory"); },
        set: function (value) { cordovaPropertySet(this, "cacheDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "externalApplicationStorageDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalApplicationStorageDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalApplicationStorageDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "externalDataDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalDataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalDataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "externalCacheDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalCacheDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalCacheDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "externalRootDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalRootDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalRootDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "tempDirectory", {
        get: function () { return cordovaPropertyGet(this, "tempDirectory"); },
        set: function (value) { cordovaPropertySet(this, "tempDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "syncedDataDirectory", {
        get: function () { return cordovaPropertyGet(this, "syncedDataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "syncedDataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "documentsDirectory", {
        get: function () { return cordovaPropertyGet(this, "documentsDirectory"); },
        set: function (value) { cordovaPropertySet(this, "documentsDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "sharedDirectory", {
        get: function () { return cordovaPropertyGet(this, "sharedDirectory"); },
        set: function (value) { cordovaPropertySet(this, "sharedDirectory", value); },
        enumerable: true,
        configurable: true
    });
    FileOriginal.pluginName = "File";
    FileOriginal.plugin = "cordova-plugin-file";
    FileOriginal.pluginRef = "cordova.file";
    FileOriginal.repo = "https://github.com/apache/cordova-plugin-file";
    FileOriginal.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    return FileOriginal;
}(IonicNativePlugin));
var File = new FileOriginal();
export { File };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sZ0ZBQTRELFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQW9xQmhGLHdCQUFpQjs7O1FBOER6QyxzQkFBZ0IsR0FBUTtZQUN0QixDQUFDLEVBQUUsZUFBZTtZQUNsQixDQUFDLEVBQUUsY0FBYztZQUNqQixDQUFDLEVBQUUsV0FBVztZQUNkLENBQUMsRUFBRSxrQkFBa0I7WUFDckIsQ0FBQyxFQUFFLGNBQWM7WUFDakIsQ0FBQyxFQUFFLDZCQUE2QjtZQUNoQyxDQUFDLEVBQUUsbUJBQW1CO1lBQ3RCLENBQUMsRUFBRSxZQUFZO1lBQ2YsQ0FBQyxFQUFFLDBCQUEwQjtZQUM3QixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLGlCQUFpQjtZQUNyQixFQUFFLEVBQUUsa0JBQWtCO1lBQ3RCLEVBQUUsRUFBRSxjQUFjO1NBQ25CLENBQUM7OztJQU9GLCtCQUFnQjs7O21EQUFvQjtnQkFDbEMsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUE2QixFQUFFLE1BQTRCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RyxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFXRCx1QkFBUSxhQUFDLElBQVksRUFBRSxHQUFXOzs7bURBQW9CO2dCQUNwRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsT0FBTyxHQUFHLCtCQUEr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M0IsK0JBQWE7Ozs7OzswQkFNYixnQ0FBYzs7Ozs7OzBCQUtkLHFEQUFtQzs7Ozs7OzBCQUtuQyx1Q0FBcUI7Ozs7OzswQkFLckIsd0NBQXNCOzs7Ozs7MEJBS3RCLHVDQUFxQjs7Ozs7OzBCQUtyQiwrQkFBYTs7Ozs7OzBCQUtiLHFDQUFtQjs7Ozs7OzBCQUtuQixvQ0FBa0I7Ozs7OzswQkFLbEIsaUNBQWU7Ozs7Ozs7Ozs7O2VBanVCcEM7RUFxcUIwQixpQkFBaUI7U0FBOUIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YUNoZWNrLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGdldFByb21pc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmlsZSBleHRlbmRzIEJsb2Ige1xyXG4gIC8qKlxyXG4gICAqIE5hbWUgb2YgdGhlIGZpbGUsIHdpdGhvdXQgcGF0aCBpbmZvcm1hdGlvblxyXG4gICAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBMYXN0IG1vZGlmaWVkIGRhdGVcclxuICAgKi9cclxuICBsYXN0TW9kaWZpZWQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBMYXN0IG1vZGlmaWVkIGRhdGVcclxuICAgKi9cclxuICBsYXN0TW9kaWZpZWREYXRlOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogU2l6ZSBpbiBieXRlc1xyXG4gICAqL1xyXG4gIHNpemU6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBGaWxlIG1pbWUgdHlwZVxyXG4gICAqL1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBsb2NhbFVSTDogc3RyaW5nO1xyXG4gIHN0YXJ0OiBudW1iZXI7XHJcbiAgZW5kOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBcInNsaWNlXCIgb2YgdGhlIGZpbGUuIFNpbmNlIENvcmRvdmEgRmlsZXMgZG9uJ3QgY29udGFpbiB0aGUgYWN0dWFsXHJcbiAgICogY29udGVudCwgdGhpcyByZWFsbHkgcmV0dXJucyBhIEZpbGUgd2l0aCBhZGp1c3RlZCBzdGFydCBhbmQgZW5kLlxyXG4gICAqIFNsaWNlcyBvZiBzbGljZXMgYXJlIHN1cHBvcnRlZC5cclxuICAgKiBAcGFyYW0gc3RhcnQge051bWJlcn0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIHN0YXJ0IHRoZSBzbGljZSAoaW5jbHVzaXZlKS5cclxuICAgKiBAcGFyYW0gZW5kIHtOdW1iZXJ9IFRoZSBpbmRleCBhdCB3aGljaCB0byBlbmQgdGhlIHNsaWNlIChleGNsdXNpdmUpLlxyXG4gICAqL1xyXG4gIHNsaWNlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQmxvYjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhbEZpbGVTeXN0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgZm9yIHN0b3JhZ2Ugd2l0aCBubyBndWFyYW50ZWUgb2YgcGVyc2lzdGVuY2UuXHJcbiAgICovXHJcbiAgVEVNUE9SQVJZOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgZm9yIHN0b3JhZ2UgdGhhdCBzaG91bGQgbm90IGJlIHJlbW92ZWQgYnkgdGhlIHVzZXIgYWdlbnQgd2l0aG91dCBhcHBsaWNhdGlvbiBvciB1c2VyIHBlcm1pc3Npb24uXHJcbiAgICovXHJcbiAgUEVSU0lTVEVOVDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBSZXF1ZXN0cyBhIGZpbGVzeXN0ZW0gaW4gd2hpY2ggdG8gc3RvcmUgYXBwbGljYXRpb24gZGF0YS5cclxuICAgKiBAcGFyYW0gdHlwZSBXaGV0aGVyIHRoZSBmaWxlc3lzdGVtIHJlcXVlc3RlZCBzaG91bGQgYmUgcGVyc2lzdGVudCwgYXMgZGVmaW5lZCBhYm92ZS4gVXNlIG9uZSBvZiBURU1QT1JBUlkgb3JcclxuICAgKiAgIFBFUlNJU1RFTlQuXHJcbiAgICogQHBhcmFtIHNpemUgVGhpcyBpcyBhbiBpbmRpY2F0b3Igb2YgaG93IG11Y2ggc3RvcmFnZSBzcGFjZSwgaW4gYnl0ZXMsIHRoZSBhcHBsaWNhdGlvbiBleHBlY3RzIHRvIG5lZWQuXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBUaGUgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBhZ2VudCBwcm92aWRlcyBhIGZpbGVzeXN0ZW0uXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4sIG9yIHdoZW4gdGhlIHJlcXVlc3QgdG8gb2J0YWluIHRoZSBmaWxlc3lzdGVtIGlzXHJcbiAgICogICBkZW5pZWQuXHJcbiAgICovXHJcbiAgcmVxdWVzdEZpbGVTeXN0ZW0oXHJcbiAgICB0eXBlOiBudW1iZXIsXHJcbiAgICBzaXplOiBudW1iZXIsXHJcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVTeXN0ZW1DYWxsYmFjayxcclxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGxvb2sgdXAgdGhlIEVudHJ5IGZvciBhIGZpbGUgb3IgZGlyZWN0b3J5IHJlZmVycmVkIHRvIGJ5IGEgbG9jYWwgVVJMLlxyXG4gICAqIEBwYXJhbSB1cmwgQSBVUkwgcmVmZXJyaW5nIHRvIGEgbG9jYWwgZmlsZSBpbiBhIGZpbGVzeXN0ZW0gYWNjZXNzYWJsZSB2aWEgdGhpcyBBUEkuXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJlcG9ydCB0aGUgRmlsZUVudHJ5IHRvIHdoaWNoIHRoZSBzdXBwbGllZCBVUkwgcmVmZXJzLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgRW50cnkgaXNcclxuICAgKiAgIGRlbmllZC5cclxuICAgKi9cclxuICByZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKHVybDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIHNlZSByZXF1ZXN0RmlsZVN5c3RlbS5cclxuICAgKi9cclxuICB3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbShcclxuICAgIHR5cGU6IG51bWJlcixcclxuICAgIHNpemU6IG51bWJlcixcclxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRmlsZVN5c3RlbUNhbGxiYWNrLFxyXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcclxuICApOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhIHtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBmaWxlIG9yIGRpcmVjdG9yeSB3YXMgbGFzdCBtb2RpZmllZC5cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBtb2RpZmljYXRpb25UaW1lOiBEYXRlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZmlsZSwgaW4gYnl0ZXMuIFRoaXMgbXVzdCByZXR1cm4gMCBmb3IgZGlyZWN0b3JpZXMuXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgc2l6ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdzIHtcclxuICAvKipcclxuICAgKiBVc2VkIHRvIGluZGljYXRlIHRoYXQgdGhlIHVzZXIgd2FudHMgdG8gY3JlYXRlIGEgZmlsZSBvciBkaXJlY3RvcnkgaWYgaXQgd2FzIG5vdCBwcmV2aW91c2x5IHRoZXJlLlxyXG4gICAqL1xyXG4gIGNyZWF0ZT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ5IGl0c2VsZiwgZXhjbHVzaXZlIG11c3QgaGF2ZSBubyBlZmZlY3QuIFVzZWQgd2l0aCBjcmVhdGUsIGl0IG11c3QgY2F1c2UgZ2V0RmlsZSBhbmQgZ2V0RGlyZWN0b3J5IHRvIGZhaWwgaWYgdGhlXHJcbiAgICogdGFyZ2V0IHBhdGggYWxyZWFkeSBleGlzdHMuXHJcbiAgICovXHJcbiAgZXhjbHVzaXZlPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZmlsZSBzeXN0ZW0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTeXN0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGZpbGUgc3lzdGVtLiBUaGUgc3BlY2lmaWNzIG9mIG5hbWluZyBmaWxlc3lzdGVtcyBpcyB1bnNwZWNpZmllZCwgYnV0IGEgbmFtZSBtdXN0IGJlIHVuaXF1ZVxyXG4gICAqIGFjcm9zcyB0aGUgbGlzdCBvZiBleHBvc2VkIGZpbGUgc3lzdGVtcy5cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgZmlsZSBzeXN0ZW0uXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgcm9vdDogRGlyZWN0b3J5RW50cnk7XHJcblxyXG4gIHRvSlNPTigpOiBzdHJpbmc7XHJcblxyXG4gIGVuY29kZVVSSVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVudHJ5IHtcclxuICAvKipcclxuICAgKiBFbnRyeSBpcyBhIGZpbGUuXHJcbiAgICovXHJcbiAgaXNGaWxlOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBFbnRyeSBpcyBhIGRpcmVjdG9yeS5cclxuICAgKi9cclxuICBpc0RpcmVjdG9yeTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogTG9vayB1cCBtZXRhZGF0YSBhYm91dCB0aGlzIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSB0aW1lIG9mIHRoZSBsYXN0IG1vZGlmaWNhdGlvbi5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBFcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqL1xyXG4gIGdldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIG1ldGFkYXRhIG9mIHRoZSBlbnRyeS5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBNZXRhZGF0YSBvYmplY3RcclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgRmlsZUVycm9yXHJcbiAgICogQHBhcmFtIG1ldGFkYXRhT2JqZWN0IHtNZXRhZGF0YX0ga2V5cyBhbmQgdmFsdWVzIHRvIHNldFxyXG4gICAqL1xyXG4gIHNldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjazogRXJyb3JDYWxsYmFjaywgbWV0YWRhdGFPYmplY3Q6IE1ldGFkYXRhKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGVudHJ5LCBleGNsdWRpbmcgdGhlIHBhdGggbGVhZGluZyB0byBpdC5cclxuICAgKi9cclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGZ1bGwgYWJzb2x1dGUgcGF0aCBmcm9tIHRoZSByb290IHRvIHRoZSBlbnRyeS5cclxuICAgKi9cclxuICBmdWxsUGF0aDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBmaWxlIHN5c3RlbSBvbiB3aGljaCB0aGUgZW50cnkgcmVzaWRlcy5cclxuICAgKi9cclxuICBmaWxlc3lzdGVtOiBGaWxlU3lzdGVtO1xyXG4gIC8qKlxyXG4gICAqIGFuIGFsdGVybmF0ZSBVUkwgd2hpY2ggY2FuIGJlIHVzZWQgYnkgbmF0aXZlIHdlYnZpZXcgY29udHJvbHMsIGZvciBleGFtcGxlIG1lZGlhIHBsYXllcnMuXHJcbiAgICovXHJcbiAgbmF0aXZlVVJMOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExvb2sgdXAgbWV0YWRhdGEgYWJvdXQgdGhpcyBlbnRyeS5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgdGltZSBvZiB0aGUgbGFzdCBtb2RpZmljYXRpb24uXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgRXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cclxuICAgKi9cclxuICBnZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBtZXRhZGF0YSBvZiB0aGUgZW50cnkuXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgTWV0YWRhdGEgb2JqZWN0XHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIEZpbGVFcnJvclxyXG4gICAqIEBwYXJhbSBtZXRhZGF0YU9iamVjdCB7TWV0YWRhdGF9IGtleXMgYW5kIHZhbHVlcyB0byBzZXRcclxuICAgKi9cclxuICBzZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s6IEVycm9yQ2FsbGJhY2ssIG1ldGFkYXRhT2JqZWN0OiBNZXRhZGF0YSk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdmUgYW4gZW50cnkgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24gb24gdGhlIGZpbGUgc3lzdGVtLiBJdCBpcyBhbiBlcnJvciB0byB0cnkgdG86XHJcbiAgICpcclxuICAgKiA8dWk+XHJcbiAgICogPGxpPm1vdmUgYSBkaXJlY3RvcnkgaW5zaWRlIGl0c2VsZiBvciB0byBhbnkgY2hpbGQgYXQgYW55IGRlcHRoOzwvbGk+XHJcbiAgICogPGxpPm1vdmUgYW4gZW50cnkgaW50byBpdHMgcGFyZW50IGlmIGEgbmFtZSBkaWZmZXJlbnQgZnJvbSBpdHMgY3VycmVudCBvbmUgaXNuJ3QgcHJvdmlkZWQ7PC9saT5cclxuICAgKiA8bGk+bW92ZSBhIGZpbGUgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5OzwvbGk+XHJcbiAgICogPGxpPm1vdmUgYSBkaXJlY3RvcnkgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZmlsZTs8L2xpPlxyXG4gICAqIDxsaT5tb3ZlIGFueSBlbGVtZW50IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeSB3aGljaCBpcyBub3QgZW1wdHkuPC9saT5cclxuICAgKiA8dWw+XHJcbiAgICpcclxuICAgKiBBIG1vdmUgb2YgYSBmaWxlIG9uIHRvcCBvZiBhbiBleGlzdGluZyBmaWxlIG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBmaWxlLlxyXG4gICAqIEEgbW92ZSBvZiBhIGRpcmVjdG9yeSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZW1wdHkgZGlyZWN0b3J5IG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBkaXJlY3RvcnkuXHJcbiAgICovXHJcbiAgbW92ZVRvKFxyXG4gICAgcGFyZW50OiBEaXJlY3RvcnlFbnRyeSxcclxuICAgIG5ld05hbWU/OiBzdHJpbmcsXHJcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiBFbnRyeUNhbGxiYWNrLFxyXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcclxuICApOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDb3B5IGFuIGVudHJ5IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIG9uIHRoZSBmaWxlIHN5c3RlbS4gSXQgaXMgYW4gZXJyb3IgdG8gdHJ5IHRvOlxyXG4gICAqXHJcbiAgICogPHVsPlxyXG4gICAqIDxsaT4gY29weSBhIGRpcmVjdG9yeSBpbnNpZGUgaXRzZWxmIG9yIHRvIGFueSBjaGlsZCBhdCBhbnkgZGVwdGg7PC9saT5cclxuICAgKiA8bGk+IGNvcHkgYW4gZW50cnkgaW50byBpdHMgcGFyZW50IGlmIGEgbmFtZSBkaWZmZXJlbnQgZnJvbSBpdHMgY3VycmVudCBvbmUgaXNuJ3QgcHJvdmlkZWQ7PC9saT5cclxuICAgKiA8bGk+IGNvcHkgYSBmaWxlIHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeTs8L2xpPlxyXG4gICAqIDxsaT4gY29weSBhIGRpcmVjdG9yeSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBmaWxlOzwvbGk+XHJcbiAgICogPGxpPiBjb3B5IGFueSBlbGVtZW50IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeSB3aGljaCBpcyBub3QgZW1wdHkuPC9saT5cclxuICAgKiA8bGk+IEEgY29weSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuPC9saT5cclxuICAgKiA8bGk+IEEgY29weSBvZiBhIGRpcmVjdG9yeSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZW1wdHkgZGlyZWN0b3J5IG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdFxyXG4gICAqIGRpcmVjdG9yeS48L2xpPlxyXG4gICAqIDwvdWw+XHJcbiAgICpcclxuICAgKiBEaXJlY3RvcnkgY29waWVzIGFyZSBhbHdheXMgcmVjdXJzaXZlLS10aGF0IGlzLCB0aGV5IGNvcHkgYWxsIGNvbnRlbnRzIG9mIHRoZSBkaXJlY3RvcnkuXHJcbiAgICovXHJcbiAgY29weVRvKFxyXG4gICAgcGFyZW50OiBEaXJlY3RvcnlFbnRyeSxcclxuICAgIG5ld05hbWU/OiBzdHJpbmcsXHJcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiBFbnRyeUNhbGxiYWNrLFxyXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcclxuICApOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS4gVW5saWtlIHRoZSBVUk4gZGVmaW5lZCBpbiBbRklMRS1BUEktRURdLCBpdCBoYXMgbm8gc3BlY2lmaWNcclxuICAgKiBleHBpcmF0aW9uOyBhcyBpdCBkZXNjcmliZXMgYSBsb2NhdGlvbiBvbiBkaXNrLCBpdCBzaG91bGQgYmUgdmFsaWQgYXQgbGVhc3QgYXMgbG9uZyBhcyB0aGF0IGxvY2F0aW9uIGV4aXN0cy5cclxuICAgKi9cclxuICB0b1VSTCgpOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiBhIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYWNyb3NzIHRoZSBicmlkZ2UgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS5cclxuICAgKiBAcmV0dXJuIHN0cmluZyBVUkwgdGhhdCBjYW4gYmUgcGFzc2VkIGFjcm9zcyB0aGUgYnJpZGdlIHRvIGlkZW50aWZ5IHRoaXMgZW50cnlcclxuICAgKi9cclxuICB0b0ludGVybmFsVVJMKCk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBhIGZpbGUgb3IgZGlyZWN0b3J5LiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGRlbGV0ZSBhIGRpcmVjdG9yeSB0aGF0IGlzIG5vdCBlbXB0eS4gSXQgaXMgYW4gZXJyb3IgdG9cclxuICAgKiBhdHRlbXB0IHRvIGRlbGV0ZSB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgYSBmaWxlc3lzdGVtLlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBzdWNjZXNzLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqL1xyXG4gIHJlbW92ZShzdWNjZXNzQ2FsbGJhY2s6IFZvaWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBMb29rIHVwIHRoZSBwYXJlbnQgRGlyZWN0b3J5RW50cnkgY29udGFpbmluZyB0aGlzIEVudHJ5LiBJZiB0aGlzIEVudHJ5IGlzIHRoZSByb290IG9mIGl0cyBmaWxlc3lzdGVtLCBpdHMgcGFyZW50XHJcbiAgICogaXMgaXRzZWxmLlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXR1cm4gdGhlIHBhcmVudCBFbnRyeS5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cclxuICAgKi9cclxuICBnZXRQYXJlbnQoc3VjY2Vzc0NhbGxiYWNrOiBEaXJlY3RvcnlFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGRpcmVjdG9yeSBvbiBhIGZpbGUgc3lzdGVtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3RvcnlFbnRyeSBleHRlbmRzIEVudHJ5IHtcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IERpcmVjdG9yeVJlYWRlciB0byByZWFkIEVudHJpZXMgZnJvbSB0aGlzIERpcmVjdG9yeS5cclxuICAgKi9cclxuICBjcmVhdGVSZWFkZXIoKTogRGlyZWN0b3J5UmVhZGVyO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIG9yIGxvb2tzIHVwIGEgZmlsZS5cclxuICAgKiBAcGFyYW0gcGF0aCBFaXRoZXIgYW4gYWJzb2x1dGUgcGF0aCBvciBhIHJlbGF0aXZlIHBhdGggZnJvbSB0aGlzIERpcmVjdG9yeUVudHJ5IHRvIHRoZSBmaWxlIHRvIGJlIGxvb2tlZCB1cCBvclxyXG4gICAqICAgY3JlYXRlZC4gSXQgaXMgYW4gZXJyb3IgdG8gYXR0ZW1wdCB0byBjcmVhdGUgYSBmaWxlIHdob3NlIGltbWVkaWF0ZSBwYXJlbnQgZG9lcyBub3QgeWV0IGV4aXN0LlxyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICogICAgIDx1bD5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBhbmQgZXhjbHVzaXZlIGFyZSBib3RoIHRydWUsIGFuZCB0aGUgcGF0aCBhbHJlYWR5IGV4aXN0cywgZ2V0RmlsZSBtdXN0IGZhaWwuPC9saT5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXRGaWxlIG11c3QgY3JlYXRlIGl0IGFzIGFcclxuICAgKiAgIHplcm8tbGVuZ3RoIGZpbGUgYW5kIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgRmlsZUVudHJ5LjwvbGk+XHJcbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XHJcbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGV4aXN0cywgYnV0IGlzIGEgZGlyZWN0b3J5LCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxyXG4gICAqICAgICA8bGk+T3RoZXJ3aXNlLCBpZiBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCByZXR1cm4gYSBGaWxlRW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XHJcbiAgICogICAgIDwvdWw+XHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgRmlsZSBzZWxlY3RlZCBvciBjcmVhdGVkLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqL1xyXG4gIGdldEZpbGUocGF0aDogc3RyaW5nLCBvcHRpb25zPzogRmxhZ3MsIHN1Y2Nlc3NDYWxsYmFjaz86IEZpbGVFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBkaXJlY3RvcnkuXHJcbiAgICogQHBhcmFtIHBhdGggRWl0aGVyIGFuIGFic29sdXRlIHBhdGggb3IgYSByZWxhdGl2ZSBwYXRoIGZyb20gdGhpcyBEaXJlY3RvcnlFbnRyeSB0byB0aGUgZGlyZWN0b3J5IHRvIGJlIGxvb2tlZCB1cFxyXG4gICAqICAgb3IgY3JlYXRlZC4gSXQgaXMgYW4gZXJyb3IgdG8gYXR0ZW1wdCB0byBjcmVhdGUgYSBkaXJlY3Rvcnkgd2hvc2UgaW1tZWRpYXRlIHBhcmVudCBkb2VzIG5vdCB5ZXQgZXhpc3QuXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKiAgICAgPHVsPlxyXG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGFuZCBleGNsdXNpdmUgYXJlIGJvdGggdHJ1ZSBhbmQgdGhlIHBhdGggYWxyZWFkeSBleGlzdHMsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXREaXJlY3RvcnkgbXVzdCBjcmVhdGUgYW5kIHJldHVyblxyXG4gICAqICAgYSBjb3JyZXNwb25kaW5nIERpcmVjdG9yeUVudHJ5LjwvbGk+XHJcbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBmaWxlLCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XHJcbiAgICogICAgIDxsaT5PdGhlcndpc2UsIGlmIG5vIG90aGVyIGVycm9yIG9jY3VycywgZ2V0RGlyZWN0b3J5IG11c3QgcmV0dXJuIGEgRGlyZWN0b3J5RW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XHJcbiAgICogICAgIDwvdWw+XHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayAgIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBEaXJlY3RvcnlFbnRyeSBzZWxlY3RlZCBvciBjcmVhdGVkLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqXHJcbiAgICovXHJcbiAgZ2V0RGlyZWN0b3J5KFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IEZsYWdzLFxyXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRGlyZWN0b3J5RW50cnlDYWxsYmFjayxcclxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBhIGRpcmVjdG9yeSBhbmQgYWxsIG9mIGl0cyBjb250ZW50cywgaWYgYW55LiBJbiB0aGUgZXZlbnQgb2YgYW4gZXJyb3IgW2UuZy4gdHJ5aW5nIHRvIGRlbGV0ZSBhIGRpcmVjdG9yeVxyXG4gICAqIHRoYXQgY29udGFpbnMgYSBmaWxlIHRoYXQgY2Fubm90IGJlIHJlbW92ZWRdLCBzb21lIG9mIHRoZSBjb250ZW50cyBvZiB0aGUgZGlyZWN0b3J5IG1heSBiZSBkZWxldGVkLiBJdCBpcyBhbiBlcnJvclxyXG4gICAqIHRvIGF0dGVtcHQgdG8gZGVsZXRlIHRoZSByb290IGRpcmVjdG9yeSBvZiBhIGZpbGVzeXN0ZW0uXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgcmVtb3ZlUmVjdXJzaXZlbHkoc3VjY2Vzc0NhbGxiYWNrOiBWb2lkQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBsZXRzIGEgdXNlciBsaXN0IGZpbGVzIGFuZCBkaXJlY3RvcmllcyBpbiBhIGRpcmVjdG9yeS4gSWYgdGhlcmUgYXJlIG5vIGFkZGl0aW9ucyB0byBvclxyXG4gKiBkZWxldGlvbnMgZnJvbSBhIGRpcmVjdG9yeSBiZXR3ZWVuIHRoZSBmaXJzdCBhbmQgbGFzdCBjYWxsIHRvIHJlYWRFbnRyaWVzLCBhbmQgbm8gZXJyb3JzIG9jY3VyLCB0aGVuOlxyXG4gKiA8dWw+XHJcbiAqIDxsaT4gQSBzZXJpZXMgb2YgY2FsbHMgdG8gcmVhZEVudHJpZXMgbXVzdCByZXR1cm4gZWFjaCBlbnRyeSBpbiB0aGUgZGlyZWN0b3J5IGV4YWN0bHkgb25jZS48L2xpPlxyXG4gKiA8bGk+IE9uY2UgYWxsIGVudHJpZXMgaGF2ZSBiZWVuIHJldHVybmVkLCB0aGUgbmV4dCBjYWxsIHRvIHJlYWRFbnRyaWVzIG11c3QgcHJvZHVjZSBhbiBlbXB0eSBhcnJheS48L2xpPlxyXG4gKiA8bGk+IElmIG5vdCBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBhcnJheSBwcm9kdWNlZCBieSByZWFkRW50cmllcyBtdXN0IG5vdCBiZSBlbXB0eS48L2xpPlxyXG4gKiA8bGk+IFRoZSBlbnRyaWVzIHByb2R1Y2VkIGJ5IHJlYWRFbnRyaWVzIG11c3Qgbm90IGluY2x1ZGUgdGhlIGRpcmVjdG9yeSBpdHNlbGYgW1wiLlwiXSBvciBpdHMgcGFyZW50IFtcIi4uXCJdLjwvbGk+XHJcbiAqIDwvdWw+XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeVJlYWRlciB7XHJcbiAgbG9jYWxVUkw6IHN0cmluZztcclxuICBoYXNSZWFkRW50cmllczogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCB0aGUgbmV4dCBibG9jayBvZiBlbnRyaWVzIGZyb20gdGhpcyBkaXJlY3RvcnkuXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBDYWxsZWQgb25jZSBwZXIgc3VjY2Vzc2Z1bCBjYWxsIHRvIHJlYWRFbnRyaWVzIHRvIGRlbGl2ZXIgdGhlIG5leHQgcHJldmlvdXNseS11bnJlcG9ydGVkXHJcbiAgICogICBzZXQgb2YgRW50cmllcyBpbiB0aGUgYXNzb2NpYXRlZCBEaXJlY3RvcnkuIElmIGFsbCBFbnRyaWVzIGhhdmUgYWxyZWFkeSBiZWVuIHJldHVybmVkIGZyb20gcHJldmlvdXMgaW52b2NhdGlvbnNcclxuICAgKiAgIG9mIHJlYWRFbnRyaWVzLCBzdWNjZXNzQ2FsbGJhY2sgbXVzdCBiZSBjYWxsZWQgd2l0aCBhIHplcm8tbGVuZ3RoIGFycmF5IGFzIGFuIGFyZ3VtZW50LlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgaW5kaWNhdGluZyB0aGF0IHRoZXJlIHdhcyBhbiBlcnJvciByZWFkaW5nIGZyb20gdGhlIERpcmVjdG9yeS5cclxuICAgKi9cclxuICByZWFkRW50cmllcyhzdWNjZXNzQ2FsbGJhY2s6IEVudHJpZXNDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmaWxlIG9uIGEgZmlsZSBzeXN0ZW0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVFbnRyeSBleHRlbmRzIEVudHJ5IHtcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IEZpbGVXcml0ZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBmaWxlIHRoYXQgdGhpcyBGaWxlRW50cnkgcmVwcmVzZW50cy5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgbmV3IEZpbGVXcml0ZXIuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgY3JlYXRlV3JpdGVyKHN1Y2Nlc3NDYWxsYmFjazogRmlsZVdyaXRlckNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBGaWxlIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZmlsZSB0aGF0IHRoaXMgRmlsZUVudHJ5IHJlcHJlc2VudHMuXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIEZpbGUuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgZmlsZShzdWNjZXNzQ2FsbGJhY2s6IEZpbGVDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogV2hlbiByZXF1ZXN0RmlsZVN5c3RlbSgpIHN1Y2NlZWRzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGaWxlU3lzdGVtQ2FsbGJhY2sgPSAoZmlsZXN5c3RlbTogRmlsZVN5c3RlbSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBFbnRyeSBvYmplY3RzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRW50cnlDYWxsYmFjayA9IChlbnRyeTogRW50cnkpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRmlsZUVudHJ5IG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGaWxlRW50cnlDYWxsYmFjayA9IChlbnRyeTogRmlsZUVudHJ5KSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIERpcmVjdG9yeUVudHJ5IG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBEaXJlY3RvcnlFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBXaGVuIHJlYWRFbnRyaWVzKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEVudHJpZXNDYWxsYmFjayA9IChlbnRyaWVzOiBFbnRyeVtdKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIGZpbGUgYW5kIGRpcmVjdG9yeSBtZXRhZGF0YS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE1ldGFkYXRhQ2FsbGJhY2sgPSAobWV0YWRhdGE6IE1ldGFkYXRhKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBjcmVhdGUgYSBGaWxlV3JpdGVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRmlsZVdyaXRlckNhbGxiYWNrID0gKGZpbGVXcml0ZXI6IEZpbGVXcml0ZXIpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIG9idGFpbiBhIEZpbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGaWxlQ2FsbGJhY2sgPSAoZmlsZTogSUZpbGUpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBnZW5lcmljIGNhbGxiYWNrIHVzZWQgdG8gaW5kaWNhdGUgc3VjY2VzcyBvZiBhbiBhc3luY2hyb25vdXMgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVm9pZENhbGxiYWNrID0gKCkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBXaGVuIGFuIGVycm9yIG9jY3VycywgdGhlIGZvbGxvd2luZyBjYWxsYmFjayBpcyBtYWRlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXJyb3JDYWxsYmFjayA9IChlcnI6IEZpbGVFcnJvcikgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3ZlUmVzdWx0IHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGZpbGVSZW1vdmVkOiBFbnRyeTtcclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVNhdmVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIEZpbGVTYXZlciBjb25zdHJ1Y3RvciBpcyBjYWxsZWQsIHRoZSB1c2VyIGFnZW50IG11c3QgcmV0dXJuIGEgbmV3IEZpbGVTYXZlciBvYmplY3Qgd2l0aCByZWFkeVN0YXRlIHNldCB0b1xyXG4gICAqIElOSVQuIFRoaXMgY29uc3RydWN0b3IgbXVzdCBiZSB2aXNpYmxlIHdoZW4gdGhlIHNjcmlwdCdzIGdsb2JhbCBvYmplY3QgaXMgZWl0aGVyIGEgV2luZG93IG9iamVjdCBvciBhbiBvYmplY3RcclxuICAgKiBpbXBsZW1lbnRpbmcgdGhlIFdvcmtlclV0aWxzIGludGVyZmFjZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iKTtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgYWJvcnQgbWV0aG9kIGlzIGNhbGxlZCwgdXNlciBhZ2VudHMgbXVzdCBydW4gdGhlIHN0ZXBzIGJlbG93OlxyXG4gICAqIDxvbD5cclxuICAgKiA8bGk+IElmIHJlYWR5U3RhdGUgPT0gRE9ORSBvciByZWFkeVN0YXRlID09IElOSVQsIHRlcm1pbmF0ZSB0aGlzIG92ZXJhbGwgc2VyaWVzIG9mIHN0ZXBzIHdpdGhvdXQgZG9pbmcgYW55dGhpbmdcclxuICAgKiBlbHNlLiA8L2xpPlxyXG4gICAqIDxsaT4gU2V0IHJlYWR5U3RhdGUgdG8gRE9ORS4gPC9saT5cclxuICAgKiA8bGk+IElmIHRoZXJlIGFyZSBhbnkgdGFza3MgZnJvbSB0aGUgb2JqZWN0J3MgRmlsZVNhdmVyIHRhc2sgc291cmNlIGluIG9uZSBvZiB0aGUgdGFzayBxdWV1ZXMsIHRoZW4gcmVtb3ZlIHRob3NlXHJcbiAgICogdGFza3MuIDwvbGk+XHJcbiAgICogPGxpPiBUZXJtaW5hdGUgdGhlIHdyaXRlIGFsZ29yaXRobSBiZWluZyBwcm9jZXNzZWQuIDwvbGk+XHJcbiAgICogPGxpPiBTZXQgdGhlIGVycm9yIGF0dHJpYnV0ZSB0byBhIERPTUVycm9yIG9iamVjdCBvZiB0eXBlIFwiQWJvcnRFcnJvclwiLiA8L2xpPlxyXG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCBhYm9ydCA8L2xpPlxyXG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCB3cml0ZSBlbmQgPC9saT5cclxuICAgKiA8bGk+IFRlcm1pbmF0ZSB0aGlzIGFsZ29yaXRobS4gPC9saT5cclxuICAgKiA8L29sPlxyXG4gICAqL1xyXG4gIGFib3J0KCk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBibG9iIGlzIGJlaW5nIHdyaXR0ZW4uXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgSU5JVDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBvYmplY3QgaGFzIGJlZW4gY29uc3RydWN0ZWQsIGJ1dCB0aGVyZSBpcyBubyBwZW5kaW5nIHdyaXRlLlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIFdSSVRJTkc6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgZW50aXJlIEJsb2IgaGFzIGJlZW4gd3JpdHRlbiB0byB0aGUgZmlsZSwgYW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSB3cml0ZSwgb3IgdGhlIHdyaXRlIHdhcyBhYm9ydGVkIHVzaW5nXHJcbiAgICogYWJvcnQoKS4gVGhlIEZpbGVTYXZlciBpcyBubyBsb25nZXIgd3JpdGluZyB0aGUgYmxvYi5cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBET05FOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIEZpbGVTYXZlciBvYmplY3QgY2FuIGJlIGluIG9uZSBvZiAzIHN0YXRlcy4gVGhlIHJlYWR5U3RhdGUgYXR0cmlidXRlLCBvbiBnZXR0aW5nLCBtdXN0IHJldHVybiB0aGUgY3VycmVudFxyXG4gICAqIHN0YXRlLCB3aGljaCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcclxuICAgKiA8dWw+XHJcbiAgICogPGxpPklOSVQ8L2xpPlxyXG4gICAqIDxsaT5XUklUSU5HPC9saT5cclxuICAgKiA8bGk+RE9ORTwvbGk+XHJcbiAgICogPHVsPlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIHJlYWR5U3RhdGU6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgbGFzdCBlcnJvciB0aGF0IG9jY3VycmVkIG9uIHRoZSBGaWxlU2F2ZXIuXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgZXJyb3I6IEVycm9yO1xyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXIgZm9yIHdyaXRlIHN0YXJ0IGV2ZW50c1xyXG4gICAqL1xyXG4gIG9ud3JpdGVzdGFydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXIgZm9yIHByb2dyZXNzIGV2ZW50cy5cclxuICAgKi9cclxuICBvbnByb2dyZXNzOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZXZlbnRzLlxyXG4gICAqL1xyXG4gIG9ud3JpdGU6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBIYW5kbGVyIGZvciBhYm9ydCBldmVudHMuXHJcbiAgICovXHJcbiAgb25hYm9ydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXIgZm9yIGVycm9yIGV2ZW50cy5cclxuICAgKi9cclxuICBvbmVycm9yOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZW5kIGV2ZW50cy5cclxuICAgKi9cclxuICBvbndyaXRlZW5kOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIEZpbGVTYXZlciBjb25zdHJ1Y3RvciBpcyBjYWxsZWQsIHRoZSB1c2VyIGFnZW50IG11c3QgcmV0dXJuIGEgbmV3IEZpbGVTYXZlciBvYmplY3Qgd2l0aCByZWFkeVN0YXRlIHNldCB0b1xyXG4gICAqIElOSVQuIFRoaXMgY29uc3RydWN0b3IgbXVzdCBiZSB2aXNpYmxlIHdoZW4gdGhlIHNjcmlwdCdzIGdsb2JhbCBvYmplY3QgaXMgZWl0aGVyIGEgV2luZG93IG9iamVjdCBvciBhbiBvYmplY3RcclxuICAgKiBpbXBsZW1lbnRpbmcgdGhlIFdvcmtlclV0aWxzIGludGVyZmFjZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iKTtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgYWJvcnQgbWV0aG9kIGlzIGNhbGxlZCwgdXNlciBhZ2VudHMgbXVzdCBydW4gdGhlIHN0ZXBzIGJlbG93OlxyXG4gICAqIDxvbD5cclxuICAgKiA8bGk+IElmIHJlYWR5U3RhdGUgPT0gRE9ORSBvciByZWFkeVN0YXRlID09IElOSVQsIHRlcm1pbmF0ZSB0aGlzIG92ZXJhbGwgc2VyaWVzIG9mIHN0ZXBzIHdpdGhvdXQgZG9pbmcgYW55dGhpbmdcclxuICAgKiBlbHNlLiA8L2xpPlxyXG4gICAqIDxsaT4gU2V0IHJlYWR5U3RhdGUgdG8gRE9ORS4gPC9saT5cclxuICAgKiA8bGk+IElmIHRoZXJlIGFyZSBhbnkgdGFza3MgZnJvbSB0aGUgb2JqZWN0J3MgRmlsZVNhdmVyIHRhc2sgc291cmNlIGluIG9uZSBvZiB0aGUgdGFzayBxdWV1ZXMsIHRoZW4gcmVtb3ZlIHRob3NlXHJcbiAgICogdGFza3MuIDwvbGk+XHJcbiAgICogPGxpPiBUZXJtaW5hdGUgdGhlIHdyaXRlIGFsZ29yaXRobSBiZWluZyBwcm9jZXNzZWQuIDwvbGk+XHJcbiAgICogPGxpPiBTZXQgdGhlIGVycm9yIGF0dHJpYnV0ZSB0byBhIERPTUVycm9yIG9iamVjdCBvZiB0eXBlIFwiQWJvcnRFcnJvclwiLiA8L2xpPlxyXG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCBhYm9ydCA8L2xpPlxyXG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCB3cml0ZWVuZCA8L2xpPlxyXG4gICAqIDxsaT4gVGVybWluYXRlIHRoaXMgYWxnb3JpdGhtLiA8L2xpPlxyXG4gICAqIDwvb2w+XHJcbiAgICovXHJcbiAgYWJvcnQoKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICogVGhpcyBpbnRlcmZhY2UgZXhwYW5kcyBvbiB0aGUgRmlsZVNhdmVyIGludGVyZmFjZSB0byBhbGxvdyBmb3IgbXVsdGlwbGUgd3JpdGUgYWN0aW9ucywgcmF0aGVyIHRoYW4ganVzdCBzYXZpbmcgYVxyXG4gKiAgIHNpbmdsZSBCbG9iLlxyXG4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVdyaXRlciBleHRlbmRzIEZpbGVTYXZlciB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGJ5dGUgb2Zmc2V0IGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHRvIHRoZSBmaWxlIHdpbGwgb2NjdXIuIFRoaXMgbXVzdCBiZSBubyBncmVhdGVyIHRoYW4gbGVuZ3RoLlxyXG4gICAqIEEgbmV3bHktY3JlYXRlZCBGaWxlV3JpdGVyIG11c3QgaGF2ZSBwb3NpdGlvbiBzZXQgdG8gMC5cclxuICAgKi9cclxuICBwb3NpdGlvbjogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSBmaWxlLiBJZiB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIHJlYWQgYWNjZXNzIHRvIHRoZSBmaWxlLCB0aGlzIG11c3QgYmUgdGhlIGhpZ2hlc3QgYnl0ZSBvZmZzZXQgYXRcclxuICAgKiB3aGljaCB0aGUgdXNlciBoYXMgd3JpdHRlbi5cclxuICAgKi9cclxuICBsZW5ndGg6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogV3JpdGUgdGhlIHN1cHBsaWVkIGRhdGEgdG8gdGhlIGZpbGUgYXQgcG9zaXRpb24uXHJcbiAgICogQHBhcmFtIGRhdGEgVGhlIGJsb2IgdG8gd3JpdGUuXHJcbiAgICovXHJcbiAgd3JpdGUoZGF0YTogQXJyYXlCdWZmZXIgfCBCbG9iIHwgc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogU2VlayBzZXRzIHRoZSBmaWxlIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHdpbGwgb2NjdXIuXHJcbiAgICogQHBhcmFtIG9mZnNldCBJZiBub25uZWdhdGl2ZSwgYW4gYWJzb2x1dGUgYnl0ZSBvZmZzZXQgaW50byB0aGUgZmlsZS4gSWYgbmVnYXRpdmUsIGFuIG9mZnNldCBiYWNrIGZyb20gdGhlIGVuZCBvZlxyXG4gICAqICAgdGhlIGZpbGUuXHJcbiAgICovXHJcbiAgc2VlayhvZmZzZXQ6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgdGhlIGxlbmd0aCBvZiB0aGUgZmlsZSB0byB0aGF0IHNwZWNpZmllZC4gSWYgc2hvcnRlbmluZyB0aGUgZmlsZSwgZGF0YSBiZXlvbmQgdGhlIG5ldyBsZW5ndGggbXVzdCBiZVxyXG4gICAqIGRpc2NhcmRlZC4gSWYgZXh0ZW5kaW5nIHRoZSBmaWxlLCB0aGUgZXhpc3RpbmcgZGF0YSBtdXN0IGJlIHplcm8tcGFkZGVkIHVwIHRvIHRoZSBuZXcgbGVuZ3RoLlxyXG4gICAqIEBwYXJhbSBzaXplIFRoZSBzaXplIHRvIHdoaWNoIHRoZSBsZW5ndGggb2YgdGhlIGZpbGUgaXMgdG8gYmUgYWRqdXN0ZWQsIG1lYXN1cmVkIGluIGJ5dGVzLlxyXG4gICAqL1xyXG4gIHRydW5jYXRlKHNpemU6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdyaXRlT3B0aW9ucyB7XHJcbiAgcmVwbGFjZT86IGJvb2xlYW47XHJcbiAgYXBwZW5kPzogYm9vbGVhbjtcclxuICB0cnVuY2F0ZT86IG51bWJlcjsgLy8gaWYgcHJlc2VudCwgbnVtYmVyIG9mIGJ5dGVzIHRvIHRydW5jYXRlIGZpbGUgdG8gYmVmb3JlIHdyaXRpbmdcclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZUVycm9yIHtcclxuICBzdGF0aWMgTk9UX0ZPVU5EX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBTRUNVUklUWV9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgQUJPUlRfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIE5PVF9SRUFEQUJMRV9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgRU5DT0RJTkdfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIE5PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBJTlZBTElEX1NUQVRFX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBTWU5UQVhfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIElOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBRVU9UQV9FWENFRURFRF9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgVFlQRV9NSVNNQVRDSF9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgUEFUSF9FWElTVFNfRVJSOiBudW1iZXI7XHJcbiAgLyoqIEVycm9yIGNvZGUgKi9cclxuICBjb2RlOiBudW1iZXI7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2RlOiBudW1iZXIpO1xyXG59XHJcblxyXG4vKiogQGhpZGRlbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlUmVhZGVyIHtcclxuICBzdGF0aWMgRU1QVFk6IG51bWJlcjtcclxuICBzdGF0aWMgTE9BRElORzogbnVtYmVyO1xyXG4gIHN0YXRpYyBET05FOiBudW1iZXI7XHJcbiAgc3RhdGljIFJFQURfQ0hVTktfU0laRTogbnVtYmVyO1xyXG5cclxuICByZWFkeVN0YXRlOiBudW1iZXI7IC8vIHNlZSBjb25zdGFudHMgaW4gdmFyIGRlY2xhcmF0aW9uIGJlbG93XHJcbiAgZXJyb3I6IEVycm9yO1xyXG4gIHJlc3VsdDogc3RyaW5nIHwgQXJyYXlCdWZmZXI7IC8vIHR5cGUgZGVwZW5kcyBvbiByZWFkQXNYWFgoKSBjYWxsIHR5cGVcclxuXHJcbiAgb25sb2Fkc3RhcnQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgb25wcm9ncmVzczogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICBvbmxvYWQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgb25lcnJvcjogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICBvbmxvYWRlbmQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgb25hYm9ydDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuXHJcbiAgYWJvcnQoKTogdm9pZDtcclxuXHJcbiAgcmVhZEFzVGV4dChmZTogSUZpbGUsIGVuY29kaW5nPzogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgcmVhZEFzRGF0YVVSTChmZTogSUZpbGUpOiB2b2lkO1xyXG5cclxuICByZWFkQXNCaW5hcnlTdHJpbmcoZmU6IElGaWxlKTogdm9pZDtcclxuXHJcbiAgcmVhZEFzQXJyYXlCdWZmZXIoZmU6IElGaWxlKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFdpbmRvdyBleHRlbmRzIExvY2FsRmlsZVN5c3RlbSB7fVxyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBGaWxlXHJcbiAqIEBwcmVtaWVyIGZpbGVzeXN0ZW1cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGltcGxlbWVudHMgYSBGaWxlIEFQSSBhbGxvd2luZyByZWFkL3dyaXRlIGFjY2VzcyB0byBmaWxlcyByZXNpZGluZyBvbiB0aGUgZGV2aWNlLlxyXG4gKlxyXG4gKiBUaGUgRmlsZSBjbGFzcyBpbXBsZW1lbnRzIHN0YXRpYyBjb252ZW5pZW5jZSBmdW5jdGlvbnMgdG8gYWNjZXNzIGZpbGVzIGFuZCBkaXJlY3Rvcmllcy5cclxuICpcclxuICogRXhhbXBsZTpcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IEZpbGUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZpbGUvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlOiBGaWxlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmlsZS5jaGVja0Rpcih0aGlzLmZpbGUuZGF0YURpcmVjdG9yeSwgJ215ZGlyJykudGhlbihfID0+IGNvbnNvbGUubG9nKCdEaXJlY3RvcnkgZXhpc3RzJykpLmNhdGNoKGVyciA9PlxyXG4gKiAgIGNvbnNvbGUubG9nKCdEaXJlY3RvcnkgZG9lc24ndCBleGlzdCcpKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqICBUaGlzIHBsdWdpbiBpcyBiYXNlZCBvbiBzZXZlcmFsIHNwZWNzLCBpbmNsdWRpbmcgOiBUaGUgSFRNTDUgRmlsZSBBUEkgaHR0cDogLy93d3cudzMub3JnL1RSL0ZpbGVBUEkvXHJcbiAqICBUaGUgKG5vdy1kZWZ1bmN0KSBEaXJlY3RvcmllcyBhbmQgU3lzdGVtIGV4dGVuc2lvbnMgTGF0ZXN0OiBodHRwOiAvL3d3dy53My5vcmcvVFIvMjAxMi9XRC1maWxlLXN5c3RlbS1hcGktMjAxMjA0MTcvXHJcbiAqICBBbHRob3VnaCBtb3N0IG9mIHRoZSBwbHVnaW4gY29kZSB3YXMgd3JpdHRlbiB3aGVuIGFuIGVhcmxpZXIgc3BlYyB3YXMgY3VycmVudDogaHR0cDpcclxuICogICAvL3d3dy53My5vcmcvVFIvMjAxMS9XRC1maWxlLXN5c3RlbS1hcGktMjAxMTA0MTkvIEl0IGFsc28gaW1wbGVtZW50cyB0aGUgRmlsZVdyaXRlciBzcGVjIDogaHR0cDpcclxuICogICAvL2Rldi53My5vcmcvMjAwOS9kYXAvZmlsZS1zeXN0ZW0vZmlsZS13cml0ZXIuaHRtbFxyXG4gKiAgQGludGVyZmFjZXNcclxuICogIElGaWxlXHJcbiAqICBFbnRyeVxyXG4gKiAgRGlyZWN0b3J5RW50cnlcclxuICogIERpcmVjdG9yeVJlYWRlclxyXG4gKiAgRmlsZVN5c3RlbVxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZpbGUnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEuZmlsZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZmlsZScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWxlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqICBSZWFkLW9ubHkgZGlyZWN0b3J5IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGFwcGxpY2F0aW9uRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqICBSZWFkLW9ubHkgZGlyZWN0b3J5IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGFwcGxpY2F0aW9uU3RvcmFnZURpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBXaGVyZSB0byBwdXQgYXBwLXNwZWNpZmljIGRhdGEgZmlsZXMuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGRhdGFEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FjaGVkIGZpbGVzIHRoYXQgc2hvdWxkIHN1cnZpdmUgYXBwIHJlc3RhcnRzLlxyXG4gICAqIEFwcHMgc2hvdWxkIG5vdCByZWx5IG9uIHRoZSBPUyB0byBkZWxldGUgZmlsZXMgaW4gaGVyZS5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgY2FjaGVEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQW5kcm9pZDogdGhlIGFwcGxpY2F0aW9uIHNwYWNlIG9uIGV4dGVybmFsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsQXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqICBBbmRyb2lkOiBXaGVyZSB0byBwdXQgYXBwLXNwZWNpZmljIGRhdGEgZmlsZXMgb24gZXh0ZXJuYWwgc3RvcmFnZS5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxEYXRhRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuZHJvaWQ6IHRoZSBhcHBsaWNhdGlvbiBjYWNoZSBvbiBleHRlcm5hbCBzdG9yYWdlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbENhY2hlRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuZHJvaWQ6IHRoZSBleHRlcm5hbCBzdG9yYWdlIChTRCBjYXJkKSByb290LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbFJvb3REaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogaU9TOiBUZW1wIGRpcmVjdG9yeSB0aGF0IHRoZSBPUyBjYW4gY2xlYXIgYXQgd2lsbC5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgdGVtcERpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBpT1M6IEhvbGRzIGFwcC1zcGVjaWZpYyBmaWxlcyB0aGF0IHNob3VsZCBiZSBzeW5jZWQgKGUuZy4gdG8gaUNsb3VkKS5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgc3luY2VkRGF0YURpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBpT1M6IEZpbGVzIHByaXZhdGUgdG8gdGhlIGFwcCwgYnV0IHRoYXQgYXJlIG1lYW5pbmdmdWwgdG8gb3RoZXIgYXBwbGljYXRpb25zIChlLmcuIE9mZmljZSBmaWxlcylcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgZG9jdW1lbnRzRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJsYWNrQmVycnkxMDogRmlsZXMgZ2xvYmFsbHkgYXZhaWxhYmxlIHRvIGFsbCBhcHBzXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHNoYXJlZERpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICBjb3Jkb3ZhRmlsZUVycm9yOiBhbnkgPSB7XHJcbiAgICAxOiAnTk9UX0ZPVU5EX0VSUicsXHJcbiAgICAyOiAnU0VDVVJJVFlfRVJSJyxcclxuICAgIDM6ICdBQk9SVF9FUlInLFxyXG4gICAgNDogJ05PVF9SRUFEQUJMRV9FUlInLFxyXG4gICAgNTogJ0VOQ09ESU5HX0VSUicsXHJcbiAgICA2OiAnTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSJyxcclxuICAgIDc6ICdJTlZBTElEX1NUQVRFX0VSUicsXHJcbiAgICA4OiAnU1lOVEFYX0VSUicsXHJcbiAgICA5OiAnSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSJyxcclxuICAgIDEwOiAnUVVPVEFfRVhDRUVERURfRVJSJyxcclxuICAgIDExOiAnVFlQRV9NSVNNQVRDSF9FUlInLFxyXG4gICAgMTI6ICdQQVRIX0VYSVNUU19FUlInLFxyXG4gICAgMTM6ICdXUk9OR19FTlRSWV9UWVBFJyxcclxuICAgIDE0OiAnRElSX1JFQURfRVJSJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBHZXQgZnJlZSBkaXNrIHNwYWNlIGluIEJ5dGVzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZW1haW5pbmcgZnJlZSBkaXNrIHNwYWNlIGluIEJ5dGVzXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgZ2V0RnJlZURpc2tTcGFjZSgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGNvcmRvdmEuZXhlYyhyZXNvbHZlIGFzIChkYXRhOiBhbnkpID0+IGFueSwgcmVqZWN0IGFzIChkYXRhOiBhbnkpID0+IGFueSwgJ0ZpbGUnLCAnZ2V0RnJlZURpc2tTcGFjZScsIFtdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBkaXJlY3RvcnkgZXhpc3RzIGluIGEgY2VydGFpbiBwYXRoLCBkaXJlY3RvcnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNoZWNrXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgZGlyZWN0b3J5IGV4aXN0cyBvciByZWplY3RzIHdpdGggYW5cclxuICAgKiAgIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNoZWNrRGlyKHBhdGg6IHN0cmluZywgZGlyOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChkaXIpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGggKyBkaXI7XHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKGZ1bGxQYXRoKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgZGlyZWN0b3J5IGluIHRoZSBzcGVjaWZpYyBwYXRoLlxyXG4gICAqIFRoZSByZXBsYWNlIGJvb2xlYW4gdmFsdWUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHJlcGxhY2UgYW4gZXhpc3RpbmcgZGlyZWN0b3J5IHdpdGggdGhlIHNhbWUgbmFtZS5cclxuICAgKiBJZiBhbiBleGlzdGluZyBkaXJlY3RvcnkgZXhpc3RzIGFuZCB0aGUgcmVwbGFjZSB2YWx1ZSBpcyBmYWxzZSwgdGhlIHByb21pc2Ugd2lsbCBmYWlsIGFuZCByZXR1cm4gYW4gZXJyb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY3JlYXRlXHJcbiAgICogQHBhcmFtIHtib29sZWFufSByZXBsYWNlIElmIHRydWUsIHJlcGxhY2VzIGZpbGUgd2l0aCBzYW1lIG5hbWUuIElmIGZhbHNlIHJldHVybnMgZXJyb3JcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIERpcmVjdG9yeUVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBjcmVhdGVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4pOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5PiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnM6IEZsYWdzID0ge1xyXG4gICAgICBjcmVhdGU6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghcmVwbGFjZSkge1xyXG4gICAgICBvcHRpb25zLmV4Y2x1c2l2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKS50aGVuKGZzZSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYSBkaXJlY3RvcnkgYXQgYSBnaXZlbiBwYXRoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBkaXJlY3RvcnkgbmFtZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlbW92ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oZnNlID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGRlID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoZGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdmUgYSBkaXJlY3RvcnkgdG8gYSBnaXZlbiBwYXRoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHNvdXJjZSBwYXRoIHRvIHRoZSBkaXJlY3RvcnlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBUaGUgc291cmNlIGRpcmVjdG9yeSBuYW1lXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggVGhlIGRlc3RpbmF0aW9uIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdEaXJOYW1lIFRoZSBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgbmFtZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5fEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IERpcmVjdG9yeUVudHJ5IG9iamVjdCBvclxyXG4gICAqICAgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIG1vdmVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeSB8IEVudHJ5PiB7XHJcbiAgICBuZXdEaXJOYW1lID0gbmV3RGlyTmFtZSB8fCBkaXJOYW1lO1xyXG5cclxuICAgIGlmICgvXlxcLy8udGVzdChuZXdEaXJOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbihmc2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oc3JjZGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZW5hdGlvbiA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlKHNyY2RlLCBkZXN0ZW5hdGlvbiwgbmV3RGlyTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29weSBhIGRpcmVjdG9yeSBpbiB2YXJpb3VzIG1ldGhvZHMuIElmIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBleGlzdHMsIHdpbGwgZmFpbCB0byBjb3B5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtcyBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNvcHlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0Rpck5hbWUgTmV3IG5hbWUgb2YgZGlyZWN0b3J5IHRvIGNvcHkgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBFbnRyeSBvYmplY3Qgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNvcHlEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0Rpck5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKGZzZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihzcmNkZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmNvcHkoc3JjZGUsIGRlc3RlLCBuZXdEaXJOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0IGZpbGVzIGFuZCBkaXJlY3RvcnkgZnJvbSBhIGdpdmVuIHBhdGguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW1zIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeVtdPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBhcnJheSBvZiBFbnRyeSBvYmplY3RzIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBsaXN0RGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeVtdPiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8RW50cnlbXT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKGZzZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwge1xyXG4gICAgICAgICAgY3JlYXRlOiBmYWxzZSxcclxuICAgICAgICAgIGV4Y2x1c2l2ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGRlID0+IHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBkZS5jcmVhdGVSZWFkZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkRW50cmllcyhyZWFkZXIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGZpbGVzIGFuZCB0aGUgZGlyZWN0b3J5IGZyb20gYSBkZXNpcmVkIGxvY2F0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlbW92ZVJlY3Vyc2l2ZWx5KHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxSZW1vdmVSZXN1bHQ+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbihmc2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJpbXJhZihkZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBmaWxlIGV4aXN0cyBpbiBhIGNlcnRhaW4gcGF0aCwgZGlyZWN0b3J5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlIHRvIGNoZWNrXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNoZWNrRmlsZShwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZUxvY2FsRmlsZXN5c3RlbVVybChwYXRoICsgZmlsZSkudGhlbihmc2UgPT4ge1xyXG4gICAgICBpZiAoZnNlLmlzRmlsZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoMTMpO1xyXG4gICAgICAgIGVyci5tZXNzYWdlID0gJ2lucHV0IGlzIG5vdCBhIGZpbGUnO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxib29sZWFuPihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgZmlsZSBpbiB0aGUgc3BlY2lmaWMgcGF0aC5cclxuICAgKiBUaGUgcmVwbGFjZSBib29sZWFuIHZhbHVlIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0aW5nIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lLlxyXG4gICAqIElmIGFuIGV4aXN0aW5nIGZpbGUgZXhpc3RzIGFuZCB0aGUgcmVwbGFjZSB2YWx1ZSBpcyBmYWxzZSwgdGhlIHByb21pc2Ugd2lsbCBmYWlsIGFuZCByZXR1cm4gYW4gZXJyb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBjcmVhdGVcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGxhY2UgSWYgdHJ1ZSwgcmVwbGFjZXMgZmlsZSB3aXRoIHNhbWUgbmFtZS4gSWYgZmFsc2UgcmV0dXJucyBlcnJvclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNyZWF0ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuKTogUHJvbWlzZTxGaWxlRW50cnk+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnM6IEZsYWdzID0ge1xyXG4gICAgICBjcmVhdGU6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghcmVwbGFjZSkge1xyXG4gICAgICBvcHRpb25zLmV4Y2x1c2l2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKS50aGVuKGZzZSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgb3B0aW9ucyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSBmaWxlIGZyb20gYSBkZXNpcmVkIGxvY2F0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gcmVtb3ZlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIFJlbW92ZVJlc3VsdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVtb3ZlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbihmc2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGZlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSBhIG5ldyBmaWxlIHRvIHRoZSBkZXNpcmVkIGxvY2F0aW9uLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBwYXRoIHJlbGF0aXZlIHRvIGJhc2UgcGF0aFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyfSB0ZXh0IGNvbnRlbnQsIGJsb2Igb3IgQXJyYXlCdWZmZXIgdG8gd3JpdGVcclxuICAgKiBAcGFyYW0ge0lXcml0ZU9wdGlvbnN9IHdoZXRoZXIgdG8gcmVwbGFjZS9hcHBlbmQgdG8gYW4gZXhpc3RpbmcgZmlsZS4gU2VlIElXcml0ZU9wdGlvbnMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB1cGRhdGVkIGZpbGUgZW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHdyaXRlRmlsZShcclxuICAgIHBhdGg6IHN0cmluZyxcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICB0ZXh0OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIsXHJcbiAgICBvcHRpb25zOiBJV3JpdGVPcHRpb25zID0ge31cclxuICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEZpbGVPcHRzOiBGbGFncyA9IHtcclxuICAgICAgY3JlYXRlOiAhb3B0aW9ucy5hcHBlbmQsXHJcbiAgICAgIGV4Y2x1c2l2ZTogIW9wdGlvbnMucmVwbGFjZSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbigoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShkaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWUsIGdldEZpbGVPcHRzKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGZpbGVFbnRyeTogRmlsZUVudHJ5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlRW50cnkoZmlsZUVudHJ5LCB0ZXh0LCBvcHRpb25zKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSBjb250ZW50IHRvIEZpbGVFbnRyeS5cclxuICAgKiBAaGlkZGVuXHJcbiAgICogV3JpdGUgdG8gYW4gZXhpc3RpbmcgZmlsZS5cclxuICAgKiBAcGFyYW0ge0ZpbGVFbnRyeX0gZmUgZmlsZSBlbnRyeSBvYmplY3RcclxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcn0gdGV4dCB0ZXh0IGNvbnRlbnQgb3IgYmxvYiB0byB3cml0ZVxyXG4gICAqIEBwYXJhbSB7SVdyaXRlT3B0aW9uc30gb3B0aW9ucyByZXBsYWNlIGZpbGUgaWYgc2V0IHRvIHRydWUuIFNlZSBXcml0ZU9wdGlvbnMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn0gIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdXBkYXRlZCBmaWxlIGVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBwcml2YXRlIHdyaXRlRmlsZUVudHJ5KGZlOiBGaWxlRW50cnksIHRleHQ6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlciwgb3B0aW9uczogSVdyaXRlT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlV3JpdGVyKGZlKVxyXG4gICAgICAudGhlbih3cml0ZXIgPT4ge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmFwcGVuZCkge1xyXG4gICAgICAgICAgd3JpdGVyLnNlZWsod3JpdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy50cnVuY2F0ZSkge1xyXG4gICAgICAgICAgd3JpdGVyLnRydW5jYXRlKG9wdGlvbnMudHJ1bmNhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGUod3JpdGVyLCB0ZXh0KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gZmUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV3JpdGUgdG8gYW4gZXhpc3RpbmcgZmlsZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgcGF0aCByZWxhdGl2ZSB0byBiYXNlIHBhdGhcclxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2J9IHRleHQgY29udGVudCBvciBibG9iIHRvIHdyaXRlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHdyaXRlRXhpc3RpbmdGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nIHwgQmxvYik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlKHBhdGgsIGZpbGVOYW1lLCB0ZXh0LCB7IHJlcGxhY2U6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWFkIHRoZSBjb250ZW50cyBvZiBhIGZpbGUgYXMgdGV4dC5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBzdHJpbmcgb3IgcmVqZWN0cyB3aXRoXHJcbiAgICogICBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZWFkQXNUZXh0KHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ1RleHQnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYSBiYXNlNjQgZW5jb2RlZCBkYXRhIHVybC5cclxuICAgKiBBIGRhdGEgdXJsIGlzIG9mIHRoZSBmb3JtOlxyXG4gICAqICAgICAgZGF0YTogWzxtZWRpYXR5cGU+XVs7YmFzZTY0XSw8ZGF0YT5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIGRhdGEgVVJMIG9yIHJlamVjdHNcclxuICAgKiAgIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVhZEFzRGF0YVVSTChwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdEYXRhVVJMJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGEgYmluYXJ5IGRhdGEuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgc3RyaW5nIHJlamVjdHMgd2l0aCBhblxyXG4gICAqICAgZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVhZEFzQmluYXJ5U3RyaW5nKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ0JpbmFyeVN0cmluZycpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhbiBBcnJheUJ1ZmZlci5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXlCdWZmZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIEFycmF5QnVmZmVyIG9yXHJcbiAgICogICByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVhZEFzQXJyYXlCdWZmZXIocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxBcnJheUJ1ZmZlcj4ocGF0aCwgZmlsZSwgJ0FycmF5QnVmZmVyJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlIGEgZmlsZSB0byBhIGdpdmVuIHBhdGguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIG1vdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0ZpbGVOYW1lIE5ldyBuYW1lIG9mIGZpbGUgdG8gbW92ZSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IEVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBtb3ZlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcclxuICAgIG5ld0ZpbGVOYW1lID0gbmV3RmlsZU5hbWUgfHwgZmlsZU5hbWU7XHJcblxyXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0ZpbGVOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbihmc2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihzcmNmZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoc3JjZmUsIGRlc3RlLCBuZXdGaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29weSBhIGZpbGUgaW4gdmFyaW91cyBtZXRob2RzLiBJZiBmaWxlIGV4aXN0cywgd2lsbCBmYWlsIHRvIGNvcHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIGNvcHlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0ZpbGVOYW1lIE5ldyBuYW1lIG9mIGZpbGUgdG8gY29weSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY29weUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0ZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XHJcbiAgICBuZXdGaWxlTmFtZSA9IG5ld0ZpbGVOYW1lIHx8IGZpbGVOYW1lO1xyXG5cclxuICAgIGlmICgvXlxcLy8udGVzdChuZXdGaWxlTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oZnNlID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oc3JjZmUgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb3B5KHNyY2ZlLCBkZXN0ZSwgbmV3RmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGZpbGxFcnJvck1lc3NhZ2UoZXJyOiBGaWxlRXJyb3IpOiB2b2lkIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gdGhpcy5jb3Jkb3ZhRmlsZUVycm9yW2Vyci5jb2RlXTtcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGZpbGUgc3lzdGVtIFVSTFxyXG4gICAqIEBwYXJhbSBmaWxlVXJsIHtzdHJpbmd9IGZpbGUgc3lzdGVtIHVybFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKGZpbGVVcmw6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoXHJcbiAgICAgICAgICBmaWxlVXJsLFxyXG4gICAgICAgICAgKGVudHJ5OiBFbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGVudHJ5KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoeGMpIHtcclxuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xyXG4gICAgICAgIHJlamVjdCh4Yyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzb2x2ZXMgYSBsb2NhbCBkaXJlY3RvcnkgdXJsXHJcbiAgICogQHBhcmFtIGRpcmVjdG9yeVVybCB7c3RyaW5nfSBkaXJlY3Rvcnkgc3lzdGVtIHVybFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZXNvbHZlRGlyZWN0b3J5VXJsKGRpcmVjdG9yeVVybDogc3RyaW5nKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZUxvY2FsRmlsZXN5c3RlbVVybChkaXJlY3RvcnlVcmwpLnRoZW4oZGUgPT4ge1xyXG4gICAgICBpZiAoZGUuaXNEaXJlY3RvcnkpIHtcclxuICAgICAgICByZXR1cm4gZGUgYXMgRGlyZWN0b3J5RW50cnk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcigxMyk7XHJcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSAnaW5wdXQgaXMgbm90IGEgZGlyZWN0b3J5JztcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8RGlyZWN0b3J5RW50cnk+KGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgZGlyZWN0b3J5XHJcbiAgICogQHBhcmFtIGRpcmVjdG9yeUVudHJ5IHtEaXJlY3RvcnlFbnRyeX0gRGlyZWN0b3J5IGVudHJ5LCBvYnRhaW5lZCBieSByZXNvbHZlRGlyZWN0b3J5VXJsIG1ldGhvZFxyXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlOYW1lIHtzdHJpbmd9IERpcmVjdG9yeSBuYW1lXHJcbiAgICogQHBhcmFtIGZsYWdzIHtGbGFnc30gT3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBnZXREaXJlY3RvcnkoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5LCBkaXJlY3RvcnlOYW1lOiBzdHJpbmcsIGZsYWdzOiBGbGFncyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpcmVjdG9yeUVudHJ5LmdldERpcmVjdG9yeShcclxuICAgICAgICAgIGRpcmVjdG9yeU5hbWUsXHJcbiAgICAgICAgICBmbGFncyxcclxuICAgICAgICAgIGRlID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gY2F0Y2ggKHhjKSB7XHJcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcclxuICAgICAgICByZWplY3QoeGMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIGZpbGVcclxuICAgKiBAcGFyYW0gZGlyZWN0b3J5RW50cnkge0RpcmVjdG9yeUVudHJ5fSBEaXJlY3RvcnkgZW50cnksIG9idGFpbmVkIGJ5IHJlc29sdmVEaXJlY3RvcnlVcmwgbWV0aG9kXHJcbiAgICogQHBhcmFtIGZpbGVOYW1lIHtzdHJpbmd9IEZpbGUgbmFtZVxyXG4gICAqIEBwYXJhbSBmbGFncyB7RmxhZ3N9IE9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlRW50cnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGdldEZpbGUoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5LCBmaWxlTmFtZTogc3RyaW5nLCBmbGFnczogRmxhZ3MpOiBQcm9taXNlPEZpbGVFbnRyeT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEZpbGVFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpcmVjdG9yeUVudHJ5LmdldEZpbGUoZmlsZU5hbWUsIGZsYWdzLCByZXNvbHZlLCBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoeGMpIHtcclxuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xyXG4gICAgICAgIHJlamVjdCh4Yyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkRmlsZTxUPihcclxuICAgIHBhdGg6IHN0cmluZyxcclxuICAgIGZpbGU6IHN0cmluZyxcclxuICAgIHJlYWRBczogJ0FycmF5QnVmZmVyJyB8ICdCaW5hcnlTdHJpbmcnIHwgJ0RhdGFVUkwnIHwgJ1RleHQnXHJcbiAgKTogUHJvbWlzZTxUPiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZGlyZWN0b3J5RW50cnksIGZpbGUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGZpbGVFbnRyeTogRmlsZUVudHJ5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZXR1cm4gZ2V0UHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVhZGVyLnJlc3VsdCAhPT0gdW5kZWZpbmVkIHx8IHJlYWRlci5yZXN1bHQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKChyZWFkZXIucmVzdWx0IGFzIGFueSkgYXMgVCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVhZGVyLmVycm9yICE9PSB1bmRlZmluZWQgfHwgcmVhZGVyLmVycm9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KHsgY29kZTogbnVsbCwgbWVzc2FnZTogJ1JFQURFUl9PTkxPQURFTkRfRVJSJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBmaWxlRW50cnkuZmlsZShcclxuICAgICAgICAgICAgZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVhZGVyW2ByZWFkQXMke3JlYWRBc31gXS5jYWxsKHJlYWRlciwgZmlsZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHJlbW92ZShmZTogRW50cnkpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZS5yZW1vdmUoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUsIGZpbGVSZW1vdmVkOiBmZSB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgbW92ZShzcmNlOiBFbnRyeSwgZGVzdGRpcjogRGlyZWN0b3J5RW50cnksIG5ld05hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzcmNlLm1vdmVUbyhcclxuICAgICAgICBkZXN0ZGlyLFxyXG4gICAgICAgIG5ld05hbWUsXHJcbiAgICAgICAgZGVzdGUgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkZXN0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGNvcHkoc3JjZTogRW50cnksIGRlc3RkaXI6IERpcmVjdG9yeUVudHJ5LCBuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc3JjZS5jb3B5VG8oXHJcbiAgICAgICAgZGVzdGRpcixcclxuICAgICAgICBuZXdOYW1lLFxyXG4gICAgICAgIGRlc3RlID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZWFkRW50cmllcyhkcjogRGlyZWN0b3J5UmVhZGVyKTogUHJvbWlzZTxFbnRyeVtdPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RW50cnlbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBkci5yZWFkRW50cmllcyhcclxuICAgICAgICBlbnRyaWVzID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZW50cmllcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHJpbXJhZihkZTogRGlyZWN0b3J5RW50cnkpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBkZS5yZW1vdmVSZWN1cnNpdmVseShcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSwgZmlsZVJlbW92ZWQ6IGRlIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVXcml0ZXIoZmU6IEZpbGVFbnRyeSk6IFByb21pc2U8RmlsZVdyaXRlcj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEZpbGVXcml0ZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmUuY3JlYXRlV3JpdGVyKFxyXG4gICAgICAgIHdyaXRlciA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHdyaXRlcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHdyaXRlKHdyaXRlcjogRmlsZVdyaXRlciwgZ3U6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICBpZiAoZ3UgaW5zdGFuY2VvZiBCbG9iKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLndyaXRlRmlsZUluQ2h1bmtzKHdyaXRlciwgZ3UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3JpdGVyLm9ud3JpdGVlbmQgPSBldnQgPT4ge1xyXG4gICAgICAgIGlmICh3cml0ZXIuZXJyb3IpIHtcclxuICAgICAgICAgIHJlamVjdCh3cml0ZXIuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKGV2dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB3cml0ZXIud3JpdGUoZ3UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB3cml0ZUZpbGVJbkNodW5rcyh3cml0ZXI6IEZpbGVXcml0ZXIsIGZpbGU6IEJsb2IpIHtcclxuICAgIGNvbnN0IEJMT0NLX1NJWkUgPSAxMDI0ICogMTAyNDtcclxuICAgIGxldCB3cml0dGVuU2l6ZSA9IDA7XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVOZXh0Q2h1bmsoKSB7XHJcbiAgICAgIGNvbnN0IHNpemUgPSBNYXRoLm1pbihCTE9DS19TSVpFLCBmaWxlLnNpemUgLSB3cml0dGVuU2l6ZSk7XHJcbiAgICAgIGNvbnN0IGNodW5rID0gZmlsZS5zbGljZSh3cml0dGVuU2l6ZSwgd3JpdHRlblNpemUgKyBzaXplKTtcclxuXHJcbiAgICAgIHdyaXR0ZW5TaXplICs9IHNpemU7XHJcbiAgICAgIHdyaXRlci53cml0ZShjaHVuayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdyaXRlci5vbmVycm9yID0gcmVqZWN0IGFzIChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICAgICAgd3JpdGVyLm9ud3JpdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdyaXR0ZW5TaXplIDwgZmlsZS5zaXplKSB7XHJcbiAgICAgICAgICB3cml0ZU5leHRDaHVuaygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB3cml0ZU5leHRDaHVuaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==