import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, checkAvailability, cordovaPropertyGet, cordovaPropertySet, getPromise } from '@ionic-native/core';
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
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
    File.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    File.prototype.checkDir = function (path, dir) {
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
    File.prototype.createDir = function (path, dirName, replace) {
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
    File.prototype.removeDir = function (path, dirName) {
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
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
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
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
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
    File.prototype.listDir = function (path, dirName) {
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
    File.prototype.removeRecursively = function (path, dirName) {
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
    File.prototype.checkFile = function (path, file) {
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
    File.prototype.createFile = function (path, fileName, replace) {
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
    File.prototype.removeFile = function (path, fileName) {
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
    File.prototype.writeFile = function (path, fileName, text, options) {
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
    File.prototype.writeFileEntry = function (fe, text, options) {
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
    File.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    File.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    File.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    File.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    File.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
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
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
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
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
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
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
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
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
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
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
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
    File.prototype.readFile = function (path, file, readAs) {
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
    File.prototype.remove = function (fe) {
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
    File.prototype.move = function (srce, destdir, newName) {
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
    File.prototype.copy = function (srce, destdir, newName) {
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
    File.prototype.readEntries = function (dr) {
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
    File.prototype.rimraf = function (de) {
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
    File.prototype.createWriter = function (fe) {
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
    File.prototype.write = function (writer, gu) {
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
    File.prototype.writeFileInChunks = function (writer, file) {
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
    Object.defineProperty(File.prototype, "applicationDirectory", {
        get: function () { return cordovaPropertyGet(this, "applicationDirectory"); },
        set: function (value) { cordovaPropertySet(this, "applicationDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "applicationStorageDirectory", {
        get: function () { return cordovaPropertyGet(this, "applicationStorageDirectory"); },
        set: function (value) { cordovaPropertySet(this, "applicationStorageDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "dataDirectory", {
        get: function () { return cordovaPropertyGet(this, "dataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "dataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "cacheDirectory", {
        get: function () { return cordovaPropertyGet(this, "cacheDirectory"); },
        set: function (value) { cordovaPropertySet(this, "cacheDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalApplicationStorageDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalApplicationStorageDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalDataDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalDataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalDataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalCacheDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalCacheDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalCacheDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalRootDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalRootDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalRootDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "tempDirectory", {
        get: function () { return cordovaPropertyGet(this, "tempDirectory"); },
        set: function (value) { cordovaPropertySet(this, "tempDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "syncedDataDirectory", {
        get: function () { return cordovaPropertyGet(this, "syncedDataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "syncedDataDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "documentsDirectory", {
        get: function () { return cordovaPropertyGet(this, "documentsDirectory"); },
        set: function (value) { cordovaPropertySet(this, "documentsDirectory", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(File.prototype, "sharedDirectory", {
        get: function () { return cordovaPropertyGet(this, "sharedDirectory"); },
        set: function (value) { cordovaPropertySet(this, "sharedDirectory", value); },
        enumerable: true,
        configurable: true
    });
    File.pluginName = "File";
    File.plugin = "cordova-plugin-file";
    File.pluginRef = "cordova.file";
    File.repo = "https://github.com/apache/cordova-plugin-file";
    File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    File = __decorate([
        Injectable()
    ], File);
    return File;
}(IonicNativePlugin));
export { File };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sZ0ZBQTRELFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQW9xQmhGLHdCQUFpQjs7O1FBOER6QyxzQkFBZ0IsR0FBUTtZQUN0QixDQUFDLEVBQUUsZUFBZTtZQUNsQixDQUFDLEVBQUUsY0FBYztZQUNqQixDQUFDLEVBQUUsV0FBVztZQUNkLENBQUMsRUFBRSxrQkFBa0I7WUFDckIsQ0FBQyxFQUFFLGNBQWM7WUFDakIsQ0FBQyxFQUFFLDZCQUE2QjtZQUNoQyxDQUFDLEVBQUUsbUJBQW1CO1lBQ3RCLENBQUMsRUFBRSxZQUFZO1lBQ2YsQ0FBQyxFQUFFLDBCQUEwQjtZQUM3QixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLGlCQUFpQjtZQUNyQixFQUFFLEVBQUUsa0JBQWtCO1lBQ3RCLEVBQUUsRUFBRSxjQUFjO1NBQ25CLENBQUM7OztJQU9GLCtCQUFnQjs7O21EQUFvQjtnQkFDbEMsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUE2QixFQUFFLE1BQTRCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RyxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFXRCx1QkFBUSxhQUFDLElBQVksRUFBRSxHQUFXOzs7bURBQW9CO2dCQUNwRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsT0FBTyxHQUFHLCtCQUErQixDQUFDO29CQUM5QyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQU0sR0FBRyxDQUFDLENBQUM7aUJBQ2pDO2dCQUVELElBQU0sUUFBUSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQzVCLE9BQU8sS0FBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDN0MsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBYUQsd0JBQVMsYUFBQyxJQUFZLEVBQUUsT0FBZSxFQUFFLE9BQWdCOzs7bURBQTJCO2dCQUNsRixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3ZCLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsT0FBTyxHQUFHLCtCQUErQixDQUFDO29CQUM5QyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQU0sR0FBRyxDQUFDLENBQUM7aUJBQ2pDO2dCQUVELElBQU0sT0FBTyxHQUFVO29CQUNyQixNQUFNLEVBQUUsSUFBSTtpQkFDYixDQUFDO2dCQUVGLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ1osT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQzFCO2dCQUVELE9BQU8sS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7b0JBQzVDLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNsRCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFVRCx3QkFBUyxhQUFDLElBQVksRUFBRSxPQUFlOzs7bURBQXlCO2dCQUM5RCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3ZCLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsT0FBTyxHQUFHLCtCQUErQixDQUFDO29CQUM5QyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQU0sR0FBRyxDQUFDLENBQUM7aUJBQ2pDO2dCQUVELE9BQU8sS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztxQkFDbEMsSUFBSSxDQUFDLFVBQUEsR0FBRztvQkFDUCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLFVBQUEsRUFBRTtvQkFDTixPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2FBQ047OztJQWFELHNCQUFPLGFBQUMsSUFBWSxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsVUFBa0I7OzttREFBbUM7Z0JBQzNHLFVBQVUsR0FBRyxVQUFVLElBQUksT0FBTyxDQUFDO2dCQUVuQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQzFCLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsT0FBTyxHQUFHLCtCQUErQixDQUFDO29CQUM5QyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQU0sR0FBRyxDQUFDLENBQUM7aUJBQ2pDO2dCQUVELE9BQU8sS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztxQkFDbEMsSUFBSSxDQUFDLFVBQUEsR0FBRztvQkFDUCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLFVBQUEsS0FBSztvQkFDVCxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxXQUFXO3dCQUN2RCxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDbkQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjs7O0lBWUQsc0JBQU8sYUFBQyxJQUFZLEVBQUUsT0FBZSxFQUFFLE9BQWUsRUFBRSxVQUFrQjs7O21EQUFrQjtnQkFDMUYsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUMxQixJQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsR0FBRyxDQUFDLE9BQU8sR0FBRywrQkFBK0IsQ0FBQztvQkFDOUMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUNqQztnQkFFRCxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7cUJBQ2xDLElBQUksQ0FBQyxVQUFBLEdBQUc7b0JBQ1AsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDNUQsQ0FBQyxDQUFDO3FCQUNELElBQUksQ0FBQyxVQUFBLEtBQUs7b0JBQ1QsT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSzt3QkFDakQsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ047OztJQVVELHNCQUFPLGFBQUMsSUFBWSxFQUFFLE9BQWU7OzttREFBb0I7Z0JBQ3ZELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDdkIsSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7b0JBQzlDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBVSxHQUFHLENBQUMsQ0FBQztpQkFDckM7Z0JBRUQsT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO3FCQUNsQyxJQUFJLENBQUMsVUFBQSxHQUFHO29CQUNQLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO3dCQUNyQyxNQUFNLEVBQUUsS0FBSzt3QkFDYixTQUFTLEVBQUUsS0FBSztxQkFDakIsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBQSxFQUFFO29CQUNOLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDakMsT0FBTyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQzthQUNOOzs7SUFVRCxnQ0FBaUIsYUFBQyxJQUFZLEVBQUUsT0FBZTs7O21EQUF5QjtnQkFDdEUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN2QixJQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsR0FBRyxDQUFDLE9BQU8sR0FBRywrQkFBK0IsQ0FBQztvQkFDOUMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFlLEdBQUcsQ0FBQyxDQUFDO2lCQUMxQztnQkFFRCxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7cUJBQ2xDLElBQUksQ0FBQyxVQUFBLEdBQUc7b0JBQ1AsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDNUQsQ0FBQyxDQUFDO3FCQUNELElBQUksQ0FBQyxVQUFBLEVBQUU7b0JBQ04sT0FBTyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQzthQUNOOzs7SUFVRCx3QkFBUyxhQUFDLElBQVksRUFBRSxJQUFZOzs7bURBQW9CO2dCQUN0RCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3BCLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsT0FBTyxHQUFHLDBCQUEwQixDQUFDO29CQUN6QyxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQU0sR0FBRyxDQUFDLENBQUM7aUJBQ2pDO2dCQUVELE9BQU8sS0FBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO29CQUN6RCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7d0JBQ2QsT0FBTyxJQUFJLENBQUM7cUJBQ2I7eUJBQU07d0JBQ0wsSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzlCLEdBQUcsQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUM7d0JBQ3BDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBVSxHQUFHLENBQUMsQ0FBQztxQkFDckM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBYUQseUJBQVUsYUFBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFnQjs7O21EQUFzQjtnQkFDL0UsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUN4QixJQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsR0FBRyxDQUFDLE9BQU8sR0FBRywrQkFBK0IsQ0FBQztvQkFDOUMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO2lCQUNqQztnQkFFRCxJQUFNLE9BQU8sR0FBVTtvQkFDckIsTUFBTSxFQUFFLElBQUk7aUJBQ2IsQ0FBQztnQkFFRixJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNaLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUMxQjtnQkFFRCxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO29CQUM1QyxPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBVUQseUJBQVUsYUFBQyxJQUFZLEVBQUUsUUFBZ0I7OzttREFBeUI7Z0JBQ2hFLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDeEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7b0JBQzlDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBTSxHQUFHLENBQUMsQ0FBQztpQkFDakM7Z0JBRUQsT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO3FCQUNsQyxJQUFJLENBQUMsVUFBQSxHQUFHO29CQUNQLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBQSxFQUFFO29CQUNOLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7YUFDTjs7O0lBV0Qsd0JBQVMsYUFDUCxJQUFZLEVBQ1osUUFBZ0IsRUFDaEIsSUFBaUMsRUFDakMsT0FBMkI7O1FBQTNCLHdCQUFBLEVBQUEsWUFBMkI7O21EQUNiO2dCQUNkLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDeEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7b0JBQzlDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDNUI7Z0JBRUQsSUFBTSxXQUFXLEdBQVU7b0JBQ3pCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNO29CQUN2QixTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTztpQkFDNUIsQ0FBQztnQkFFRixPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7cUJBQ2xDLElBQUksQ0FBQyxVQUFDLGNBQThCO29CQUNuQyxPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztnQkFDN0QsQ0FBQyxDQUFDO3FCQUNELElBQUksQ0FBQyxVQUFDLFNBQW9CO29CQUN6QixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxDQUFDLENBQUM7YUFDTjs7O0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSyw2QkFBYyxHQUF0QixVQUF1QixFQUFhLEVBQUUsSUFBaUMsRUFBRSxPQUFzQjtRQUEvRixpQkFjQztRQWJDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7YUFDekIsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUI7WUFFRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25DO1lBRUQsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsRUFBRixDQUFFLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBVUQsZ0NBQWlCLGFBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsSUFBbUI7OzttREFBaUI7Z0JBQ3BGLE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2hFOzs7SUFVRCx5QkFBVSxhQUFDLElBQVksRUFBRSxJQUFZOzs7bURBQW1CO2dCQUN0RCxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQVMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNsRDs7O0lBYUQsNEJBQWEsYUFBQyxJQUFZLEVBQUUsSUFBWTs7O21EQUFtQjtnQkFDekQsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFTLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDckQ7OztJQVVELGlDQUFrQixhQUFDLElBQVksRUFBRSxJQUFZOzs7bURBQW1CO2dCQUM5RCxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQVMsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQzthQUMxRDs7O0lBVUQsZ0NBQWlCLGFBQUMsSUFBWSxFQUFFLElBQVk7OzttREFBd0I7Z0JBQ2xFLE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBYyxJQUFJLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2FBQzlEOzs7SUFZRCx1QkFBUSxhQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLE9BQWUsRUFBRSxXQUFtQjs7O21EQUFrQjtnQkFDN0YsV0FBVyxHQUFHLFdBQVcsSUFBSSxRQUFRLENBQUM7Z0JBRXRDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDM0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7b0JBQzlDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBTSxHQUFHLENBQUMsQ0FBQztpQkFDakM7Z0JBRUQsT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO3FCQUNsQyxJQUFJLENBQUMsVUFBQSxHQUFHO29CQUNQLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBQSxLQUFLO29CQUNULE9BQU8sS0FBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7d0JBQ2pELE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOOzs7SUFZRCx1QkFBUSxhQUFDLElBQVksRUFBRSxRQUFnQixFQUFFLE9BQWUsRUFBRSxXQUFtQjs7O21EQUFrQjtnQkFDN0YsV0FBVyxHQUFHLFdBQVcsSUFBSSxRQUFRLENBQUM7Z0JBRXRDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDM0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7b0JBQzlDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBTSxHQUFHLENBQUMsQ0FBQztpQkFDakM7Z0JBRUQsT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO3FCQUNsQyxJQUFJLENBQUMsVUFBQSxHQUFHO29CQUNQLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBQSxLQUFLO29CQUNULE9BQU8sS0FBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7d0JBQ2pELE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOOzs7SUFFRDs7T0FFRztJQUNLLCtCQUFnQixHQUF4QixVQUF5QixHQUFjO1FBQ3JDLElBQUk7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO0lBQ2hCLENBQUM7SUFRRCx3Q0FBeUIsYUFBQyxPQUFlOzs7bURBQWtCO2dCQUN6RCxPQUFPLFVBQVUsQ0FBUSxVQUFDLE9BQU8sRUFBRSxNQUFNO29CQUN2QyxJQUFJO3dCQUNGLE1BQU0sQ0FBQyx5QkFBeUIsQ0FDOUIsT0FBTyxFQUNQLFVBQUMsS0FBWTs0QkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2pCLENBQUMsRUFDRCxVQUFBLEdBQUc7NEJBQ0QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxDQUNGLENBQUM7cUJBQ0g7b0JBQUMsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUMxQixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ1o7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBUUQsa0NBQW1CLGFBQUMsWUFBb0I7OzttREFBMkI7Z0JBQ2pFLE9BQU8sS0FBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7b0JBQ3pELElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTt3QkFDbEIsT0FBTyxFQUFvQixDQUFDO3FCQUM3Qjt5QkFBTTt3QkFDTCxJQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDOUIsR0FBRyxDQUFDLE9BQU8sR0FBRywwQkFBMEIsQ0FBQzt3QkFDekMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFpQixHQUFHLENBQUMsQ0FBQztxQkFDNUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBVUQsMkJBQVksYUFBQyxjQUE4QixFQUFFLGFBQXFCLEVBQUUsS0FBWTs7O21EQUEyQjtnQkFDekcsT0FBTyxJQUFJLE9BQU8sQ0FBaUIsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDakQsSUFBSTt3QkFDRixjQUFjLENBQUMsWUFBWSxDQUN6QixhQUFhLEVBQ2IsS0FBSyxFQUNMLFVBQUEsRUFBRTs0QkFDQSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ2QsQ0FBQyxFQUNELFVBQUEsR0FBRzs0QkFDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDZCxDQUFDLENBQ0YsQ0FBQztxQkFDSDtvQkFBQyxPQUFPLEVBQUUsRUFBRTt3QkFDWCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQzFCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDWjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFVRCxzQkFBTyxhQUFDLGNBQThCLEVBQUUsUUFBZ0IsRUFBRSxLQUFZOzs7bURBQXNCO2dCQUMxRixPQUFPLElBQUksT0FBTyxDQUFZLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQzVDLElBQUk7d0JBQ0YsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBQ2xELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNkLENBQUMsQ0FBQyxDQUFDO3FCQUNKO29CQUFDLE9BQU8sRUFBRSxFQUFFO3dCQUNYLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNaO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQUVPLHVCQUFRLEdBQWhCLFVBQ0UsSUFBWSxFQUNaLElBQVksRUFDWixNQUEyRDtRQUg3RCxpQkFzQ0M7UUFqQ0MsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7WUFDOUMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO2FBQ2xDLElBQUksQ0FBQyxVQUFDLGNBQThCO1lBQ25DLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsU0FBb0I7WUFDekIsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztZQUNoQyxPQUFPLFVBQVUsQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNuQyxNQUFNLENBQUMsU0FBUyxHQUFHO29CQUNqQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO3dCQUN6RCxPQUFPLENBQUUsTUFBTSxDQUFDLE1BQW1CLENBQUMsQ0FBQztxQkFDdEM7eUJBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTt3QkFDOUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEI7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO3FCQUN6RDtnQkFDSCxDQUFDLENBQUM7Z0JBRUYsU0FBUyxDQUFDLElBQUksQ0FDWixVQUFBLElBQUk7b0JBQ0YsTUFBTSxDQUFDLFdBQVMsTUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxFQUNELFVBQUEsS0FBSztvQkFDSCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FDRixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7T0FFRztJQUNLLHFCQUFNLEdBQWQsVUFBZSxFQUFTO1FBQXhCLGlCQVlDO1FBWEMsT0FBTyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9DLEVBQUUsQ0FBQyxNQUFNLENBQ1A7Z0JBQ0UsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQ0QsVUFBQSxHQUFHO2dCQUNELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNLLG1CQUFJLEdBQVosVUFBYSxJQUFXLEVBQUUsT0FBdUIsRUFBRSxPQUFlO1FBQWxFLGlCQWNDO1FBYkMsT0FBTyxJQUFJLE9BQU8sQ0FBUSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUCxVQUFBLEtBQUs7Z0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pCLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBQ0QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ssbUJBQUksR0FBWixVQUFhLElBQVcsRUFBRSxPQUF1QixFQUFFLE9BQWU7UUFBbEUsaUJBY0M7UUFiQyxPQUFPLElBQUksT0FBTyxDQUFRLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FDVCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFVBQUEsS0FBSztnQkFDSCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakIsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSywwQkFBVyxHQUFuQixVQUFvQixFQUFtQjtRQUF2QyxpQkFZQztRQVhDLE9BQU8sSUFBSSxPQUFPLENBQVUsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMxQyxFQUFFLENBQUMsV0FBVyxDQUNaLFVBQUEsT0FBTztnQkFDTCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxxQkFBTSxHQUFkLFVBQWUsRUFBa0I7UUFBakMsaUJBWUM7UUFYQyxPQUFPLElBQUksT0FBTyxDQUFlLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0MsRUFBRSxDQUFDLGlCQUFpQixDQUNsQjtnQkFDRSxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLENBQUMsRUFDRCxVQUFBLEdBQUc7Z0JBQ0QsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0ssMkJBQVksR0FBcEIsVUFBcUIsRUFBYTtRQUFsQyxpQkFZQztRQVhDLE9BQU8sSUFBSSxPQUFPLENBQWEsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUM3QyxFQUFFLENBQUMsWUFBWSxDQUNiLFVBQUEsTUFBTTtnQkFDSixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxFQUNELFVBQUEsR0FBRztnQkFDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxvQkFBSyxHQUFiLFVBQWMsTUFBa0IsRUFBRSxFQUErQjtRQUMvRCxJQUFJLEVBQUUsWUFBWSxJQUFJLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBTSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3RDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBQSxHQUFHO2dCQUNyQixJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7b0JBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RCO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZDtZQUNILENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxnQ0FBaUIsR0FBekIsVUFBMEIsTUFBa0IsRUFBRSxJQUFVO1FBQ3RELElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLFNBQVMsY0FBYztZQUNyQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDO1lBQzNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUUxRCxXQUFXLElBQUksSUFBSSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUVELE9BQU8sVUFBVSxDQUFNLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDckMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUF3QyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxPQUFPLEdBQUc7Z0JBQ2YsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDM0IsY0FBYyxFQUFFLENBQUM7aUJBQ2xCO3FCQUFNO29CQUNMLE9BQU8sRUFBRSxDQUFDO2lCQUNYO1lBQ0gsQ0FBQyxDQUFDO1lBQ0YsY0FBYyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzBCQWwwQmtCLHNDQUFvQjs7Ozs7OzBCQUtwQiw2Q0FBMkI7Ozs7OzswQkFLM0IsK0JBQWE7Ozs7OzswQkFNYixnQ0FBYzs7Ozs7OzBCQUtkLHFEQUFtQzs7Ozs7OzBCQUtuQyx1Q0FBcUI7Ozs7OzswQkFLckIsd0NBQXNCOzs7Ozs7MEJBS3RCLHVDQUFxQjs7Ozs7OzBCQUtyQiwrQkFBYTs7Ozs7OzBCQUtiLHFDQUFtQjs7Ozs7OzBCQUtuQixvQ0FBa0I7Ozs7OzswQkFLbEIsaUNBQWU7Ozs7Ozs7Ozs7O0lBNUR2QixJQUFJO1FBRGhCLFVBQVUsRUFBRTtPQUNBLElBQUk7ZUFycUJqQjtFQXFxQjBCLGlCQUFpQjtTQUE5QixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhQ2hlY2ssIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElGaWxlIGV4dGVuZHMgQmxvYiB7XHJcbiAgLyoqXHJcbiAgICogTmFtZSBvZiB0aGUgZmlsZSwgd2l0aG91dCBwYXRoIGluZm9ybWF0aW9uXHJcbiAgICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIExhc3QgbW9kaWZpZWQgZGF0ZVxyXG4gICAqL1xyXG4gIGxhc3RNb2RpZmllZDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIExhc3QgbW9kaWZpZWQgZGF0ZVxyXG4gICAqL1xyXG4gIGxhc3RNb2RpZmllZERhdGU6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBTaXplIGluIGJ5dGVzXHJcbiAgICovXHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIEZpbGUgbWltZSB0eXBlXHJcbiAgICovXHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGxvY2FsVVJMOiBzdHJpbmc7XHJcbiAgc3RhcnQ6IG51bWJlcjtcclxuICBlbmQ6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIFwic2xpY2VcIiBvZiB0aGUgZmlsZS4gU2luY2UgQ29yZG92YSBGaWxlcyBkb24ndCBjb250YWluIHRoZSBhY3R1YWxcclxuICAgKiBjb250ZW50LCB0aGlzIHJlYWxseSByZXR1cm5zIGEgRmlsZSB3aXRoIGFkanVzdGVkIHN0YXJ0IGFuZCBlbmQuXHJcbiAgICogU2xpY2VzIG9mIHNsaWNlcyBhcmUgc3VwcG9ydGVkLlxyXG4gICAqIEBwYXJhbSBzdGFydCB7TnVtYmVyfSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gc3RhcnQgdGhlIHNsaWNlIChpbmNsdXNpdmUpLlxyXG4gICAqIEBwYXJhbSBlbmQge051bWJlcn0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIGVuZCB0aGUgc2xpY2UgKGV4Y2x1c2l2ZSkuXHJcbiAgICovXHJcbiAgc2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBCbG9iO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsRmlsZVN5c3RlbSB7XHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3Igc3RvcmFnZSB3aXRoIG5vIGd1YXJhbnRlZSBvZiBwZXJzaXN0ZW5jZS5cclxuICAgKi9cclxuICBURU1QT1JBUlk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3Igc3RvcmFnZSB0aGF0IHNob3VsZCBub3QgYmUgcmVtb3ZlZCBieSB0aGUgdXNlciBhZ2VudCB3aXRob3V0IGFwcGxpY2F0aW9uIG9yIHVzZXIgcGVybWlzc2lvbi5cclxuICAgKi9cclxuICBQRVJTSVNURU5UOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3RzIGEgZmlsZXN5c3RlbSBpbiB3aGljaCB0byBzdG9yZSBhcHBsaWNhdGlvbiBkYXRhLlxyXG4gICAqIEBwYXJhbSB0eXBlIFdoZXRoZXIgdGhlIGZpbGVzeXN0ZW0gcmVxdWVzdGVkIHNob3VsZCBiZSBwZXJzaXN0ZW50LCBhcyBkZWZpbmVkIGFib3ZlLiBVc2Ugb25lIG9mIFRFTVBPUkFSWSBvclxyXG4gICAqICAgUEVSU0lTVEVOVC5cclxuICAgKiBAcGFyYW0gc2l6ZSBUaGlzIGlzIGFuIGluZGljYXRvciBvZiBob3cgbXVjaCBzdG9yYWdlIHNwYWNlLCBpbiBieXRlcywgdGhlIGFwcGxpY2F0aW9uIGV4cGVjdHMgdG8gbmVlZC5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIFRoZSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGFnZW50IHByb3ZpZGVzIGEgZmlsZXN5c3RlbS5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbiwgb3Igd2hlbiB0aGUgcmVxdWVzdCB0byBvYnRhaW4gdGhlIGZpbGVzeXN0ZW0gaXNcclxuICAgKiAgIGRlbmllZC5cclxuICAgKi9cclxuICByZXF1ZXN0RmlsZVN5c3RlbShcclxuICAgIHR5cGU6IG51bWJlcixcclxuICAgIHNpemU6IG51bWJlcixcclxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRmlsZVN5c3RlbUNhbGxiYWNrLFxyXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcclxuICApOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBBbGxvd3MgdGhlIHVzZXIgdG8gbG9vayB1cCB0aGUgRW50cnkgZm9yIGEgZmlsZSBvciBkaXJlY3RvcnkgcmVmZXJyZWQgdG8gYnkgYSBsb2NhbCBVUkwuXHJcbiAgICogQHBhcmFtIHVybCBBIFVSTCByZWZlcnJpbmcgdG8gYSBsb2NhbCBmaWxlIGluIGEgZmlsZXN5c3RlbSBhY2Nlc3NhYmxlIHZpYSB0aGlzIEFQSS5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmVwb3J0IHRoZSBGaWxlRW50cnkgdG8gd2hpY2ggdGhlIHN1cHBsaWVkIFVSTCByZWZlcnMuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4sIG9yIHdoZW4gdGhlIHJlcXVlc3QgdG8gb2J0YWluIHRoZSBFbnRyeSBpc1xyXG4gICAqICAgZGVuaWVkLlxyXG4gICAqL1xyXG4gIHJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwodXJsOiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjazogRmlsZUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogc2VlIHJlcXVlc3RGaWxlU3lzdGVtLlxyXG4gICAqL1xyXG4gIHdlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKFxyXG4gICAgdHlwZTogbnVtYmVyLFxyXG4gICAgc2l6ZTogbnVtYmVyLFxyXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlU3lzdGVtQ2FsbGJhY2ssXHJcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xyXG4gICk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGEge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIGZpbGUgb3IgZGlyZWN0b3J5IHdhcyBsYXN0IG1vZGlmaWVkLlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIG1vZGlmaWNhdGlvblRpbWU6IERhdGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaXplIG9mIHRoZSBmaWxlLCBpbiBieXRlcy4gVGhpcyBtdXN0IHJldHVybiAwIGZvciBkaXJlY3Rvcmllcy5cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBzaXplOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlciB3YW50cyB0byBjcmVhdGUgYSBmaWxlIG9yIGRpcmVjdG9yeSBpZiBpdCB3YXMgbm90IHByZXZpb3VzbHkgdGhlcmUuXHJcbiAgICovXHJcbiAgY3JlYXRlPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQnkgaXRzZWxmLCBleGNsdXNpdmUgbXVzdCBoYXZlIG5vIGVmZmVjdC4gVXNlZCB3aXRoIGNyZWF0ZSwgaXQgbXVzdCBjYXVzZSBnZXRGaWxlIGFuZCBnZXREaXJlY3RvcnkgdG8gZmFpbCBpZiB0aGVcclxuICAgKiB0YXJnZXQgcGF0aCBhbHJlYWR5IGV4aXN0cy5cclxuICAgKi9cclxuICBleGNsdXNpdmU/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmaWxlIHN5c3RlbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVN5c3RlbSB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSBzeXN0ZW0uIFRoZSBzcGVjaWZpY3Mgb2YgbmFtaW5nIGZpbGVzeXN0ZW1zIGlzIHVuc3BlY2lmaWVkLCBidXQgYSBuYW1lIG11c3QgYmUgdW5pcXVlXHJcbiAgICogYWNyb3NzIHRoZSBsaXN0IG9mIGV4cG9zZWQgZmlsZSBzeXN0ZW1zLlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBmaWxlIHN5c3RlbS5cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICByb290OiBEaXJlY3RvcnlFbnRyeTtcclxuXHJcbiAgdG9KU09OKCk6IHN0cmluZztcclxuXHJcbiAgZW5jb2RlVVJJUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW50cnkge1xyXG4gIC8qKlxyXG4gICAqIEVudHJ5IGlzIGEgZmlsZS5cclxuICAgKi9cclxuICBpc0ZpbGU6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEVudHJ5IGlzIGEgZGlyZWN0b3J5LlxyXG4gICAqL1xyXG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBMb29rIHVwIG1ldGFkYXRhIGFib3V0IHRoaXMgZW50cnkuXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIHRpbWUgb2YgdGhlIGxhc3QgbW9kaWZpY2F0aW9uLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgZ2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgbWV0YWRhdGEgb2YgdGhlIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIE1ldGFkYXRhIG9iamVjdFxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBGaWxlRXJyb3JcclxuICAgKiBAcGFyYW0gbWV0YWRhdGFPYmplY3Qge01ldGFkYXRhfSBrZXlzIGFuZCB2YWx1ZXMgdG8gc2V0XHJcbiAgICovXHJcbiAgc2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrOiBFcnJvckNhbGxiYWNrLCBtZXRhZGF0YU9iamVjdDogTWV0YWRhdGEpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZW50cnksIGV4Y2x1ZGluZyB0aGUgcGF0aCBsZWFkaW5nIHRvIGl0LlxyXG4gICAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgZnVsbCBhYnNvbHV0ZSBwYXRoIGZyb20gdGhlIHJvb3QgdG8gdGhlIGVudHJ5LlxyXG4gICAqL1xyXG4gIGZ1bGxQYXRoOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGZpbGUgc3lzdGVtIG9uIHdoaWNoIHRoZSBlbnRyeSByZXNpZGVzLlxyXG4gICAqL1xyXG4gIGZpbGVzeXN0ZW06IEZpbGVTeXN0ZW07XHJcbiAgLyoqXHJcbiAgICogYW4gYWx0ZXJuYXRlIFVSTCB3aGljaCBjYW4gYmUgdXNlZCBieSBuYXRpdmUgd2VidmlldyBjb250cm9scywgZm9yIGV4YW1wbGUgbWVkaWEgcGxheWVycy5cclxuICAgKi9cclxuICBuYXRpdmVVUkw6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogTG9vayB1cCBtZXRhZGF0YSBhYm91dCB0aGlzIGVudHJ5LlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSB0aW1lIG9mIHRoZSBsYXN0IG1vZGlmaWNhdGlvbi5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBFcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqL1xyXG4gIGdldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIG1ldGFkYXRhIG9mIHRoZSBlbnRyeS5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBNZXRhZGF0YSBvYmplY3RcclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgRmlsZUVycm9yXHJcbiAgICogQHBhcmFtIG1ldGFkYXRhT2JqZWN0IHtNZXRhZGF0YX0ga2V5cyBhbmQgdmFsdWVzIHRvIHNldFxyXG4gICAqL1xyXG4gIHNldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjazogRXJyb3JDYWxsYmFjaywgbWV0YWRhdGFPYmplY3Q6IE1ldGFkYXRhKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogTW92ZSBhbiBlbnRyeSB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBvbiB0aGUgZmlsZSBzeXN0ZW0uIEl0IGlzIGFuIGVycm9yIHRvIHRyeSB0bzpcclxuICAgKlxyXG4gICAqIDx1aT5cclxuICAgKiA8bGk+bW92ZSBhIGRpcmVjdG9yeSBpbnNpZGUgaXRzZWxmIG9yIHRvIGFueSBjaGlsZCBhdCBhbnkgZGVwdGg7PC9saT5cclxuICAgKiA8bGk+bW92ZSBhbiBlbnRyeSBpbnRvIGl0cyBwYXJlbnQgaWYgYSBuYW1lIGRpZmZlcmVudCBmcm9tIGl0cyBjdXJyZW50IG9uZSBpc24ndCBwcm92aWRlZDs8L2xpPlxyXG4gICAqIDxsaT5tb3ZlIGEgZmlsZSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnk7PC9saT5cclxuICAgKiA8bGk+bW92ZSBhIGRpcmVjdG9yeSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBmaWxlOzwvbGk+XHJcbiAgICogPGxpPm1vdmUgYW55IGVsZW1lbnQgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5IHdoaWNoIGlzIG5vdCBlbXB0eS48L2xpPlxyXG4gICAqIDx1bD5cclxuICAgKlxyXG4gICAqIEEgbW92ZSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuXHJcbiAgICogQSBtb3ZlIG9mIGEgZGlyZWN0b3J5IG9uIHRvcCBvZiBhbiBleGlzdGluZyBlbXB0eSBkaXJlY3RvcnkgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGRpcmVjdG9yeS5cclxuICAgKi9cclxuICBtb3ZlVG8oXHJcbiAgICBwYXJlbnQ6IERpcmVjdG9yeUVudHJ5LFxyXG4gICAgbmV3TmFtZT86IHN0cmluZyxcclxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IEVudHJ5Q2FsbGJhY2ssXHJcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcHkgYW4gZW50cnkgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24gb24gdGhlIGZpbGUgc3lzdGVtLiBJdCBpcyBhbiBlcnJvciB0byB0cnkgdG86XHJcbiAgICpcclxuICAgKiA8dWw+XHJcbiAgICogPGxpPiBjb3B5IGEgZGlyZWN0b3J5IGluc2lkZSBpdHNlbGYgb3IgdG8gYW55IGNoaWxkIGF0IGFueSBkZXB0aDs8L2xpPlxyXG4gICAqIDxsaT4gY29weSBhbiBlbnRyeSBpbnRvIGl0cyBwYXJlbnQgaWYgYSBuYW1lIGRpZmZlcmVudCBmcm9tIGl0cyBjdXJyZW50IG9uZSBpc24ndCBwcm92aWRlZDs8L2xpPlxyXG4gICAqIDxsaT4gY29weSBhIGZpbGUgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5OzwvbGk+XHJcbiAgICogPGxpPiBjb3B5IGEgZGlyZWN0b3J5IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGZpbGU7PC9saT5cclxuICAgKiA8bGk+IGNvcHkgYW55IGVsZW1lbnQgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5IHdoaWNoIGlzIG5vdCBlbXB0eS48L2xpPlxyXG4gICAqIDxsaT4gQSBjb3B5IG9mIGEgZmlsZSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZmlsZSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXQgZmlsZS48L2xpPlxyXG4gICAqIDxsaT4gQSBjb3B5IG9mIGEgZGlyZWN0b3J5IG9uIHRvcCBvZiBhbiBleGlzdGluZyBlbXB0eSBkaXJlY3RvcnkgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0XHJcbiAgICogZGlyZWN0b3J5LjwvbGk+XHJcbiAgICogPC91bD5cclxuICAgKlxyXG4gICAqIERpcmVjdG9yeSBjb3BpZXMgYXJlIGFsd2F5cyByZWN1cnNpdmUtLXRoYXQgaXMsIHRoZXkgY29weSBhbGwgY29udGVudHMgb2YgdGhlIGRpcmVjdG9yeS5cclxuICAgKi9cclxuICBjb3B5VG8oXHJcbiAgICBwYXJlbnQ6IERpcmVjdG9yeUVudHJ5LFxyXG4gICAgbmV3TmFtZT86IHN0cmluZyxcclxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IEVudHJ5Q2FsbGJhY2ssXHJcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBVUkwgdGhhdCBjYW4gYmUgdXNlZCB0byBpZGVudGlmeSB0aGlzIGVudHJ5LiBVbmxpa2UgdGhlIFVSTiBkZWZpbmVkIGluIFtGSUxFLUFQSS1FRF0sIGl0IGhhcyBubyBzcGVjaWZpY1xyXG4gICAqIGV4cGlyYXRpb247IGFzIGl0IGRlc2NyaWJlcyBhIGxvY2F0aW9uIG9uIGRpc2ssIGl0IHNob3VsZCBiZSB2YWxpZCBhdCBsZWFzdCBhcyBsb25nIGFzIHRoYXQgbG9jYXRpb24gZXhpc3RzLlxyXG4gICAqL1xyXG4gIHRvVVJMKCk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIGEgVVJMIHRoYXQgY2FuIGJlIHBhc3NlZCBhY3Jvc3MgdGhlIGJyaWRnZSB0byBpZGVudGlmeSB0aGlzIGVudHJ5LlxyXG4gICAqIEByZXR1cm4gc3RyaW5nIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYWNyb3NzIHRoZSBicmlkZ2UgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeVxyXG4gICAqL1xyXG4gIHRvSW50ZXJuYWxVUkwoKTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIGEgZmlsZSBvciBkaXJlY3RvcnkuIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gZGVsZXRlIGEgZGlyZWN0b3J5IHRoYXQgaXMgbm90IGVtcHR5LiBJdCBpcyBhbiBlcnJvciB0b1xyXG4gICAqIGF0dGVtcHQgdG8gZGVsZXRlIHRoZSByb290IGRpcmVjdG9yeSBvZiBhIGZpbGVzeXN0ZW0uXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgcmVtb3ZlKHN1Y2Nlc3NDYWxsYmFjazogVm9pZENhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIExvb2sgdXAgdGhlIHBhcmVudCBEaXJlY3RvcnlFbnRyeSBjb250YWluaW5nIHRoaXMgRW50cnkuIElmIHRoaXMgRW50cnkgaXMgdGhlIHJvb3Qgb2YgaXRzIGZpbGVzeXN0ZW0sIGl0cyBwYXJlbnRcclxuICAgKiBpcyBpdHNlbGYuXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgcGFyZW50IEVudHJ5LlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqL1xyXG4gIGdldFBhcmVudChzdWNjZXNzQ2FsbGJhY2s6IERpcmVjdG9yeUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZGlyZWN0b3J5IG9uIGEgZmlsZSBzeXN0ZW0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeUVudHJ5IGV4dGVuZHMgRW50cnkge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgRGlyZWN0b3J5UmVhZGVyIHRvIHJlYWQgRW50cmllcyBmcm9tIHRoaXMgRGlyZWN0b3J5LlxyXG4gICAqL1xyXG4gIGNyZWF0ZVJlYWRlcigpOiBEaXJlY3RvcnlSZWFkZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBmaWxlLlxyXG4gICAqIEBwYXJhbSBwYXRoIEVpdGhlciBhbiBhYnNvbHV0ZSBwYXRoIG9yIGEgcmVsYXRpdmUgcGF0aCBmcm9tIHRoaXMgRGlyZWN0b3J5RW50cnkgdG8gdGhlIGZpbGUgdG8gYmUgbG9va2VkIHVwIG9yXHJcbiAgICogICBjcmVhdGVkLiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGNyZWF0ZSBhIGZpbGUgd2hvc2UgaW1tZWRpYXRlIHBhcmVudCBkb2VzIG5vdCB5ZXQgZXhpc3QuXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKiAgICAgPHVsPlxyXG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGFuZCBleGNsdXNpdmUgYXJlIGJvdGggdHJ1ZSwgYW5kIHRoZSBwYXRoIGFscmVhZHkgZXhpc3RzLCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxyXG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIHRydWUsIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGFuZCBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCBjcmVhdGUgaXQgYXMgYVxyXG4gICAqICAgemVyby1sZW5ndGggZmlsZSBhbmQgcmV0dXJuIGEgY29ycmVzcG9uZGluZyBGaWxlRW50cnkuPC9saT5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgZ2V0RmlsZSBtdXN0IGZhaWwuPC9saT5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBkaXJlY3RvcnksIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XHJcbiAgICogICAgIDxsaT5PdGhlcndpc2UsIGlmIG5vIG90aGVyIGVycm9yIG9jY3VycywgZ2V0RmlsZSBtdXN0IHJldHVybiBhIEZpbGVFbnRyeSBjb3JyZXNwb25kaW5nIHRvIHBhdGguPC9saT5cclxuICAgKiAgICAgPC91bD5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBGaWxlIHNlbGVjdGVkIG9yIGNyZWF0ZWQuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgZ2V0RmlsZShwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiBGbGFncywgc3VjY2Vzc0NhbGxiYWNrPzogRmlsZUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBvciBsb29rcyB1cCBhIGRpcmVjdG9yeS5cclxuICAgKiBAcGFyYW0gcGF0aCBFaXRoZXIgYW4gYWJzb2x1dGUgcGF0aCBvciBhIHJlbGF0aXZlIHBhdGggZnJvbSB0aGlzIERpcmVjdG9yeUVudHJ5IHRvIHRoZSBkaXJlY3RvcnkgdG8gYmUgbG9va2VkIHVwXHJcbiAgICogICBvciBjcmVhdGVkLiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGNyZWF0ZSBhIGRpcmVjdG9yeSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqICAgICA8dWw+XHJcbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlIGFuZCB0aGUgcGF0aCBhbHJlYWR5IGV4aXN0cywgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxyXG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIHRydWUsIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGFuZCBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldERpcmVjdG9yeSBtdXN0IGNyZWF0ZSBhbmQgcmV0dXJuXHJcbiAgICogICBhIGNvcnJlc3BvbmRpbmcgRGlyZWN0b3J5RW50cnkuPC9saT5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxyXG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBleGlzdHMsIGJ1dCBpcyBhIGZpbGUsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cclxuICAgKiAgICAgPGxpPk90aGVyd2lzZSwgaWYgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXREaXJlY3RvcnkgbXVzdCByZXR1cm4gYSBEaXJlY3RvcnlFbnRyeSBjb3JyZXNwb25kaW5nIHRvIHBhdGguPC9saT5cclxuICAgKiAgICAgPC91bD5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrICAgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXR1cm4gdGhlIERpcmVjdG9yeUVudHJ5IHNlbGVjdGVkIG9yIGNyZWF0ZWQuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICpcclxuICAgKi9cclxuICBnZXREaXJlY3RvcnkoXHJcbiAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zPzogRmxhZ3MsXHJcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiBEaXJlY3RvcnlFbnRyeUNhbGxiYWNrLFxyXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcclxuICApOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIGEgZGlyZWN0b3J5IGFuZCBhbGwgb2YgaXRzIGNvbnRlbnRzLCBpZiBhbnkuIEluIHRoZSBldmVudCBvZiBhbiBlcnJvciBbZS5nLiB0cnlpbmcgdG8gZGVsZXRlIGEgZGlyZWN0b3J5XHJcbiAgICogdGhhdCBjb250YWlucyBhIGZpbGUgdGhhdCBjYW5ub3QgYmUgcmVtb3ZlZF0sIHNvbWUgb2YgdGhlIGNvbnRlbnRzIG9mIHRoZSBkaXJlY3RvcnkgbWF5IGJlIGRlbGV0ZWQuIEl0IGlzIGFuIGVycm9yXHJcbiAgICogdG8gYXR0ZW1wdCB0byBkZWxldGUgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgZmlsZXN5c3RlbS5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gc3VjY2Vzcy5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cclxuICAgKi9cclxuICByZW1vdmVSZWN1cnNpdmVseShzdWNjZXNzQ2FsbGJhY2s6IFZvaWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGxldHMgYSB1c2VyIGxpc3QgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIGluIGEgZGlyZWN0b3J5LiBJZiB0aGVyZSBhcmUgbm8gYWRkaXRpb25zIHRvIG9yXHJcbiAqIGRlbGV0aW9ucyBmcm9tIGEgZGlyZWN0b3J5IGJldHdlZW4gdGhlIGZpcnN0IGFuZCBsYXN0IGNhbGwgdG8gcmVhZEVudHJpZXMsIGFuZCBubyBlcnJvcnMgb2NjdXIsIHRoZW46XHJcbiAqIDx1bD5cclxuICogPGxpPiBBIHNlcmllcyBvZiBjYWxscyB0byByZWFkRW50cmllcyBtdXN0IHJldHVybiBlYWNoIGVudHJ5IGluIHRoZSBkaXJlY3RvcnkgZXhhY3RseSBvbmNlLjwvbGk+XHJcbiAqIDxsaT4gT25jZSBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBuZXh0IGNhbGwgdG8gcmVhZEVudHJpZXMgbXVzdCBwcm9kdWNlIGFuIGVtcHR5IGFycmF5LjwvbGk+XHJcbiAqIDxsaT4gSWYgbm90IGFsbCBlbnRyaWVzIGhhdmUgYmVlbiByZXR1cm5lZCwgdGhlIGFycmF5IHByb2R1Y2VkIGJ5IHJlYWRFbnRyaWVzIG11c3Qgbm90IGJlIGVtcHR5LjwvbGk+XHJcbiAqIDxsaT4gVGhlIGVudHJpZXMgcHJvZHVjZWQgYnkgcmVhZEVudHJpZXMgbXVzdCBub3QgaW5jbHVkZSB0aGUgZGlyZWN0b3J5IGl0c2VsZiBbXCIuXCJdIG9yIGl0cyBwYXJlbnQgW1wiLi5cIl0uPC9saT5cclxuICogPC91bD5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3J5UmVhZGVyIHtcclxuICBsb2NhbFVSTDogc3RyaW5nO1xyXG4gIGhhc1JlYWRFbnRyaWVzOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBSZWFkIHRoZSBuZXh0IGJsb2NrIG9mIGVudHJpZXMgZnJvbSB0aGlzIGRpcmVjdG9yeS5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIENhbGxlZCBvbmNlIHBlciBzdWNjZXNzZnVsIGNhbGwgdG8gcmVhZEVudHJpZXMgdG8gZGVsaXZlciB0aGUgbmV4dCBwcmV2aW91c2x5LXVucmVwb3J0ZWRcclxuICAgKiAgIHNldCBvZiBFbnRyaWVzIGluIHRoZSBhc3NvY2lhdGVkIERpcmVjdG9yeS4gSWYgYWxsIEVudHJpZXMgaGF2ZSBhbHJlYWR5IGJlZW4gcmV0dXJuZWQgZnJvbSBwcmV2aW91cyBpbnZvY2F0aW9uc1xyXG4gICAqICAgb2YgcmVhZEVudHJpZXMsIHN1Y2Nlc3NDYWxsYmFjayBtdXN0IGJlIGNhbGxlZCB3aXRoIGEgemVyby1sZW5ndGggYXJyYXkgYXMgYW4gYXJndW1lbnQuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayBpbmRpY2F0aW5nIHRoYXQgdGhlcmUgd2FzIGFuIGVycm9yIHJlYWRpbmcgZnJvbSB0aGUgRGlyZWN0b3J5LlxyXG4gICAqL1xyXG4gIHJlYWRFbnRyaWVzKHN1Y2Nlc3NDYWxsYmFjazogRW50cmllc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZpbGUgb24gYSBmaWxlIHN5c3RlbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUVudHJ5IGV4dGVuZHMgRW50cnkge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVdyaXRlciBhc3NvY2lhdGVkIHdpdGggdGhlIGZpbGUgdGhhdCB0aGlzIEZpbGVFbnRyeSByZXByZXNlbnRzLlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSBuZXcgRmlsZVdyaXRlci5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cclxuICAgKi9cclxuICBjcmVhdGVXcml0ZXIoc3VjY2Vzc0NhbGxiYWNrOiBGaWxlV3JpdGVyQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIEZpbGUgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWxlIHRoYXQgdGhpcyBGaWxlRW50cnkgcmVwcmVzZW50cy5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgRmlsZS5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cclxuICAgKi9cclxuICBmaWxlKHN1Y2Nlc3NDYWxsYmFjazogRmlsZUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGVuIHJlcXVlc3RGaWxlU3lzdGVtKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZpbGVTeXN0ZW1DYWxsYmFjayA9IChmaWxlc3lzdGVtOiBGaWxlU3lzdGVtKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIEVudHJ5IG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBFbnRyeSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBGaWxlRW50cnkgb2JqZWN0cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZpbGVFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBGaWxlRW50cnkpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRGlyZWN0b3J5RW50cnkgb2JqZWN0cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIERpcmVjdG9yeUVudHJ5Q2FsbGJhY2sgPSAoZW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFdoZW4gcmVhZEVudHJpZXMoKSBzdWNjZWVkcywgdGhlIGZvbGxvd2luZyBjYWxsYmFjayBpcyBtYWRlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRW50cmllc0NhbGxiYWNrID0gKGVudHJpZXM6IEVudHJ5W10pID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgZmlsZSBhbmQgZGlyZWN0b3J5IG1ldGFkYXRhLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTWV0YWRhdGFDYWxsYmFjayA9IChtZXRhZGF0YTogTWV0YWRhdGEpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGNyZWF0ZSBhIEZpbGVXcml0ZXIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGaWxlV3JpdGVyQ2FsbGJhY2sgPSAoZmlsZVdyaXRlcjogRmlsZVdyaXRlcikgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gb2J0YWluIGEgRmlsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZpbGVDYWxsYmFjayA9IChmaWxlOiBJRmlsZSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGdlbmVyaWMgY2FsbGJhY2sgdXNlZCB0byBpbmRpY2F0ZSBzdWNjZXNzIG9mIGFuIGFzeW5jaHJvbm91cyBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWb2lkQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFdoZW4gYW4gZXJyb3Igb2NjdXJzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFcnJvckNhbGxiYWNrID0gKGVycjogRmlsZUVycm9yKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZW1vdmVSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZmlsZVJlbW92ZWQ6IEVudHJ5O1xyXG59XHJcblxyXG4vKiogQGhpZGRlbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlU2F2ZXIgZXh0ZW5kcyBFdmVudFRhcmdldCB7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgRmlsZVNhdmVyIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIHVzZXIgYWdlbnQgbXVzdCByZXR1cm4gYSBuZXcgRmlsZVNhdmVyIG9iamVjdCB3aXRoIHJlYWR5U3RhdGUgc2V0IHRvXHJcbiAgICogSU5JVC4gVGhpcyBjb25zdHJ1Y3RvciBtdXN0IGJlIHZpc2libGUgd2hlbiB0aGUgc2NyaXB0J3MgZ2xvYmFsIG9iamVjdCBpcyBlaXRoZXIgYSBXaW5kb3cgb2JqZWN0IG9yIGFuIG9iamVjdFxyXG4gICAqIGltcGxlbWVudGluZyB0aGUgV29ya2VyVXRpbHMgaW50ZXJmYWNlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEJsb2IpO1xyXG5cclxuICAvKipcclxuICAgKiBXaGVuIHRoZSBhYm9ydCBtZXRob2QgaXMgY2FsbGVkLCB1c2VyIGFnZW50cyBtdXN0IHJ1biB0aGUgc3RlcHMgYmVsb3c6XHJcbiAgICogPG9sPlxyXG4gICAqIDxsaT4gSWYgcmVhZHlTdGF0ZSA9PSBET05FIG9yIHJlYWR5U3RhdGUgPT0gSU5JVCwgdGVybWluYXRlIHRoaXMgb3ZlcmFsbCBzZXJpZXMgb2Ygc3RlcHMgd2l0aG91dCBkb2luZyBhbnl0aGluZ1xyXG4gICAqIGVsc2UuIDwvbGk+XHJcbiAgICogPGxpPiBTZXQgcmVhZHlTdGF0ZSB0byBET05FLiA8L2xpPlxyXG4gICAqIDxsaT4gSWYgdGhlcmUgYXJlIGFueSB0YXNrcyBmcm9tIHRoZSBvYmplY3QncyBGaWxlU2F2ZXIgdGFzayBzb3VyY2UgaW4gb25lIG9mIHRoZSB0YXNrIHF1ZXVlcywgdGhlbiByZW1vdmUgdGhvc2VcclxuICAgKiB0YXNrcy4gPC9saT5cclxuICAgKiA8bGk+IFRlcm1pbmF0ZSB0aGUgd3JpdGUgYWxnb3JpdGhtIGJlaW5nIHByb2Nlc3NlZC4gPC9saT5cclxuICAgKiA8bGk+IFNldCB0aGUgZXJyb3IgYXR0cmlidXRlIHRvIGEgRE9NRXJyb3Igb2JqZWN0IG9mIHR5cGUgXCJBYm9ydEVycm9yXCIuIDwvbGk+XHJcbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIGFib3J0IDwvbGk+XHJcbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIHdyaXRlIGVuZCA8L2xpPlxyXG4gICAqIDxsaT4gVGVybWluYXRlIHRoaXMgYWxnb3JpdGhtLiA8L2xpPlxyXG4gICAqIDwvb2w+XHJcbiAgICovXHJcbiAgYWJvcnQoKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGJsb2IgaXMgYmVpbmcgd3JpdHRlbi5cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBJTklUOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9iamVjdCBoYXMgYmVlbiBjb25zdHJ1Y3RlZCwgYnV0IHRoZXJlIGlzIG5vIHBlbmRpbmcgd3JpdGUuXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgV1JJVElORzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBlbnRpcmUgQmxvYiBoYXMgYmVlbiB3cml0dGVuIHRvIHRoZSBmaWxlLCBhbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIHdyaXRlLCBvciB0aGUgd3JpdGUgd2FzIGFib3J0ZWQgdXNpbmdcclxuICAgKiBhYm9ydCgpLiBUaGUgRmlsZVNhdmVyIGlzIG5vIGxvbmdlciB3cml0aW5nIHRoZSBibG9iLlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIERPTkU6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgRmlsZVNhdmVyIG9iamVjdCBjYW4gYmUgaW4gb25lIG9mIDMgc3RhdGVzLiBUaGUgcmVhZHlTdGF0ZSBhdHRyaWJ1dGUsIG9uIGdldHRpbmcsIG11c3QgcmV0dXJuIHRoZSBjdXJyZW50XHJcbiAgICogc3RhdGUsIHdoaWNoIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxyXG4gICAqIDx1bD5cclxuICAgKiA8bGk+SU5JVDwvbGk+XHJcbiAgICogPGxpPldSSVRJTkc8L2xpPlxyXG4gICAqIDxsaT5ET05FPC9saT5cclxuICAgKiA8dWw+XHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgcmVhZHlTdGF0ZTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXN0IGVycm9yIHRoYXQgb2NjdXJyZWQgb24gdGhlIEZpbGVTYXZlci5cclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBlcnJvcjogRXJyb3I7XHJcbiAgLyoqXHJcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgc3RhcnQgZXZlbnRzXHJcbiAgICovXHJcbiAgb253cml0ZXN0YXJ0OiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogSGFuZGxlciBmb3IgcHJvZ3Jlc3MgZXZlbnRzLlxyXG4gICAqL1xyXG4gIG9ucHJvZ3Jlc3M6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBldmVudHMuXHJcbiAgICovXHJcbiAgb253cml0ZTogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXIgZm9yIGFib3J0IGV2ZW50cy5cclxuICAgKi9cclxuICBvbmFib3J0OiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogSGFuZGxlciBmb3IgZXJyb3IgZXZlbnRzLlxyXG4gICAqL1xyXG4gIG9uZXJyb3I6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBlbmQgZXZlbnRzLlxyXG4gICAqL1xyXG4gIG9ud3JpdGVlbmQ6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgRmlsZVNhdmVyIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIHVzZXIgYWdlbnQgbXVzdCByZXR1cm4gYSBuZXcgRmlsZVNhdmVyIG9iamVjdCB3aXRoIHJlYWR5U3RhdGUgc2V0IHRvXHJcbiAgICogSU5JVC4gVGhpcyBjb25zdHJ1Y3RvciBtdXN0IGJlIHZpc2libGUgd2hlbiB0aGUgc2NyaXB0J3MgZ2xvYmFsIG9iamVjdCBpcyBlaXRoZXIgYSBXaW5kb3cgb2JqZWN0IG9yIGFuIG9iamVjdFxyXG4gICAqIGltcGxlbWVudGluZyB0aGUgV29ya2VyVXRpbHMgaW50ZXJmYWNlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEJsb2IpO1xyXG5cclxuICAvKipcclxuICAgKiBXaGVuIHRoZSBhYm9ydCBtZXRob2QgaXMgY2FsbGVkLCB1c2VyIGFnZW50cyBtdXN0IHJ1biB0aGUgc3RlcHMgYmVsb3c6XHJcbiAgICogPG9sPlxyXG4gICAqIDxsaT4gSWYgcmVhZHlTdGF0ZSA9PSBET05FIG9yIHJlYWR5U3RhdGUgPT0gSU5JVCwgdGVybWluYXRlIHRoaXMgb3ZlcmFsbCBzZXJpZXMgb2Ygc3RlcHMgd2l0aG91dCBkb2luZyBhbnl0aGluZ1xyXG4gICAqIGVsc2UuIDwvbGk+XHJcbiAgICogPGxpPiBTZXQgcmVhZHlTdGF0ZSB0byBET05FLiA8L2xpPlxyXG4gICAqIDxsaT4gSWYgdGhlcmUgYXJlIGFueSB0YXNrcyBmcm9tIHRoZSBvYmplY3QncyBGaWxlU2F2ZXIgdGFzayBzb3VyY2UgaW4gb25lIG9mIHRoZSB0YXNrIHF1ZXVlcywgdGhlbiByZW1vdmUgdGhvc2VcclxuICAgKiB0YXNrcy4gPC9saT5cclxuICAgKiA8bGk+IFRlcm1pbmF0ZSB0aGUgd3JpdGUgYWxnb3JpdGhtIGJlaW5nIHByb2Nlc3NlZC4gPC9saT5cclxuICAgKiA8bGk+IFNldCB0aGUgZXJyb3IgYXR0cmlidXRlIHRvIGEgRE9NRXJyb3Igb2JqZWN0IG9mIHR5cGUgXCJBYm9ydEVycm9yXCIuIDwvbGk+XHJcbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIGFib3J0IDwvbGk+XHJcbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIHdyaXRlZW5kIDwvbGk+XHJcbiAgICogPGxpPiBUZXJtaW5hdGUgdGhpcyBhbGdvcml0aG0uIDwvbGk+XHJcbiAgICogPC9vbD5cclxuICAgKi9cclxuICBhYm9ydCgpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBUaGlzIGludGVyZmFjZSBleHBhbmRzIG9uIHRoZSBGaWxlU2F2ZXIgaW50ZXJmYWNlIHRvIGFsbG93IGZvciBtdWx0aXBsZSB3cml0ZSBhY3Rpb25zLCByYXRoZXIgdGhhbiBqdXN0IHNhdmluZyBhXHJcbiAqICAgc2luZ2xlIEJsb2IuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlV3JpdGVyIGV4dGVuZHMgRmlsZVNhdmVyIHtcclxuICAvKipcclxuICAgKiBUaGUgYnl0ZSBvZmZzZXQgYXQgd2hpY2ggdGhlIG5leHQgd3JpdGUgdG8gdGhlIGZpbGUgd2lsbCBvY2N1ci4gVGhpcyBtdXN0IGJlIG5vIGdyZWF0ZXIgdGhhbiBsZW5ndGguXHJcbiAgICogQSBuZXdseS1jcmVhdGVkIEZpbGVXcml0ZXIgbXVzdCBoYXZlIHBvc2l0aW9uIHNldCB0byAwLlxyXG4gICAqL1xyXG4gIHBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIGZpbGUuIElmIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgcmVhZCBhY2Nlc3MgdG8gdGhlIGZpbGUsIHRoaXMgbXVzdCBiZSB0aGUgaGlnaGVzdCBieXRlIG9mZnNldCBhdFxyXG4gICAqIHdoaWNoIHRoZSB1c2VyIGhhcyB3cml0dGVuLlxyXG4gICAqL1xyXG4gIGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSB0aGUgc3VwcGxpZWQgZGF0YSB0byB0aGUgZmlsZSBhdCBwb3NpdGlvbi5cclxuICAgKiBAcGFyYW0gZGF0YSBUaGUgYmxvYiB0byB3cml0ZS5cclxuICAgKi9cclxuICB3cml0ZShkYXRhOiBBcnJheUJ1ZmZlciB8IEJsb2IgfCBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBTZWVrIHNldHMgdGhlIGZpbGUgcG9zaXRpb24gYXQgd2hpY2ggdGhlIG5leHQgd3JpdGUgd2lsbCBvY2N1ci5cclxuICAgKiBAcGFyYW0gb2Zmc2V0IElmIG5vbm5lZ2F0aXZlLCBhbiBhYnNvbHV0ZSBieXRlIG9mZnNldCBpbnRvIHRoZSBmaWxlLiBJZiBuZWdhdGl2ZSwgYW4gb2Zmc2V0IGJhY2sgZnJvbSB0aGUgZW5kIG9mXHJcbiAgICogICB0aGUgZmlsZS5cclxuICAgKi9cclxuICBzZWVrKG9mZnNldDogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgbGVuZ3RoIG9mIHRoZSBmaWxlIHRvIHRoYXQgc3BlY2lmaWVkLiBJZiBzaG9ydGVuaW5nIHRoZSBmaWxlLCBkYXRhIGJleW9uZCB0aGUgbmV3IGxlbmd0aCBtdXN0IGJlXHJcbiAgICogZGlzY2FyZGVkLiBJZiBleHRlbmRpbmcgdGhlIGZpbGUsIHRoZSBleGlzdGluZyBkYXRhIG11c3QgYmUgemVyby1wYWRkZWQgdXAgdG8gdGhlIG5ldyBsZW5ndGguXHJcbiAgICogQHBhcmFtIHNpemUgVGhlIHNpemUgdG8gd2hpY2ggdGhlIGxlbmd0aCBvZiB0aGUgZmlsZSBpcyB0byBiZSBhZGp1c3RlZCwgbWVhc3VyZWQgaW4gYnl0ZXMuXHJcbiAgICovXHJcbiAgdHJ1bmNhdGUoc2l6ZTogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJV3JpdGVPcHRpb25zIHtcclxuICByZXBsYWNlPzogYm9vbGVhbjtcclxuICBhcHBlbmQ/OiBib29sZWFuO1xyXG4gIHRydW5jYXRlPzogbnVtYmVyOyAvLyBpZiBwcmVzZW50LCBudW1iZXIgb2YgYnl0ZXMgdG8gdHJ1bmNhdGUgZmlsZSB0byBiZWZvcmUgd3JpdGluZ1xyXG59XHJcblxyXG4vKiogQGhpZGRlbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlRXJyb3Ige1xyXG4gIHN0YXRpYyBOT1RfRk9VTkRfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIFNFQ1VSSVRZX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBBQk9SVF9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgTk9UX1JFQURBQkxFX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBFTkNPRElOR19FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIElOVkFMSURfU1RBVEVfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIFNZTlRBWF9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIFFVT1RBX0VYQ0VFREVEX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBUWVBFX01JU01BVENIX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBQQVRIX0VYSVNUU19FUlI6IG51bWJlcjtcclxuICAvKiogRXJyb3IgY29kZSAqL1xyXG4gIGNvZGU6IG51bWJlcjtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZGU6IG51bWJlcik7XHJcbn1cclxuXHJcbi8qKiBAaGlkZGVuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVSZWFkZXIge1xyXG4gIHN0YXRpYyBFTVBUWTogbnVtYmVyO1xyXG4gIHN0YXRpYyBMT0FESU5HOiBudW1iZXI7XHJcbiAgc3RhdGljIERPTkU6IG51bWJlcjtcclxuICBzdGF0aWMgUkVBRF9DSFVOS19TSVpFOiBudW1iZXI7XHJcblxyXG4gIHJlYWR5U3RhdGU6IG51bWJlcjsgLy8gc2VlIGNvbnN0YW50cyBpbiB2YXIgZGVjbGFyYXRpb24gYmVsb3dcclxuICBlcnJvcjogRXJyb3I7XHJcbiAgcmVzdWx0OiBzdHJpbmcgfCBBcnJheUJ1ZmZlcjsgLy8gdHlwZSBkZXBlbmRzIG9uIHJlYWRBc1hYWCgpIGNhbGwgdHlwZVxyXG5cclxuICBvbmxvYWRzdGFydDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICBvbnByb2dyZXNzOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIG9ubG9hZDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICBvbmVycm9yOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIG9ubG9hZGVuZDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICBvbmFib3J0OiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG5cclxuICBhYm9ydCgpOiB2b2lkO1xyXG5cclxuICByZWFkQXNUZXh0KGZlOiBJRmlsZSwgZW5jb2Rpbmc/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICByZWFkQXNEYXRhVVJMKGZlOiBJRmlsZSk6IHZvaWQ7XHJcblxyXG4gIHJlYWRBc0JpbmFyeVN0cmluZyhmZTogSUZpbGUpOiB2b2lkO1xyXG5cclxuICByZWFkQXNBcnJheUJ1ZmZlcihmZTogSUZpbGUpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgV2luZG93IGV4dGVuZHMgTG9jYWxGaWxlU3lzdGVtIHt9XHJcblxyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogV2luZG93O1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZpbGVcclxuICogQHByZW1pZXIgZmlsZXN5c3RlbVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gaW1wbGVtZW50cyBhIEZpbGUgQVBJIGFsbG93aW5nIHJlYWQvd3JpdGUgYWNjZXNzIHRvIGZpbGVzIHJlc2lkaW5nIG9uIHRoZSBkZXZpY2UuXHJcbiAqXHJcbiAqIFRoZSBGaWxlIGNsYXNzIGltcGxlbWVudHMgc3RhdGljIGNvbnZlbmllbmNlIGZ1bmN0aW9ucyB0byBhY2Nlc3MgZmlsZXMgYW5kIGRpcmVjdG9yaWVzLlxyXG4gKlxyXG4gKiBFeGFtcGxlOlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5maWxlLmNoZWNrRGlyKHRoaXMuZmlsZS5kYXRhRGlyZWN0b3J5LCAnbXlkaXInKS50aGVuKF8gPT4gY29uc29sZS5sb2coJ0RpcmVjdG9yeSBleGlzdHMnKSkuY2F0Y2goZXJyID0+XHJcbiAqICAgY29uc29sZS5sb2coJ0RpcmVjdG9yeSBkb2Vzbid0IGV4aXN0JykpO1xyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogIFRoaXMgcGx1Z2luIGlzIGJhc2VkIG9uIHNldmVyYWwgc3BlY3MsIGluY2x1ZGluZyA6IFRoZSBIVE1MNSBGaWxlIEFQSSBodHRwOiAvL3d3dy53My5vcmcvVFIvRmlsZUFQSS9cclxuICogIFRoZSAobm93LWRlZnVuY3QpIERpcmVjdG9yaWVzIGFuZCBTeXN0ZW0gZXh0ZW5zaW9ucyBMYXRlc3Q6IGh0dHA6IC8vd3d3LnczLm9yZy9UUi8yMDEyL1dELWZpbGUtc3lzdGVtLWFwaS0yMDEyMDQxNy9cclxuICogIEFsdGhvdWdoIG1vc3Qgb2YgdGhlIHBsdWdpbiBjb2RlIHdhcyB3cml0dGVuIHdoZW4gYW4gZWFybGllciBzcGVjIHdhcyBjdXJyZW50OiBodHRwOlxyXG4gKiAgIC8vd3d3LnczLm9yZy9UUi8yMDExL1dELWZpbGUtc3lzdGVtLWFwaS0yMDExMDQxOS8gSXQgYWxzbyBpbXBsZW1lbnRzIHRoZSBGaWxlV3JpdGVyIHNwZWMgOiBodHRwOlxyXG4gKiAgIC8vZGV2LnczLm9yZy8yMDA5L2RhcC9maWxlLXN5c3RlbS9maWxlLXdyaXRlci5odG1sXHJcbiAqICBAaW50ZXJmYWNlc1xyXG4gKiAgSUZpbGVcclxuICogIEVudHJ5XHJcbiAqICBEaXJlY3RvcnlFbnRyeVxyXG4gKiAgRGlyZWN0b3J5UmVhZGVyXHJcbiAqICBGaWxlU3lzdGVtXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmlsZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5maWxlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogIFJlYWQtb25seSBkaXJlY3Rvcnkgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIGluc3RhbGxlZC5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgYXBwbGljYXRpb25EaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogIFJlYWQtb25seSBkaXJlY3Rvcnkgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIGluc3RhbGxlZC5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgYXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXJlIHRvIHB1dCBhcHAtc3BlY2lmaWMgZGF0YSBmaWxlcy5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgZGF0YURpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDYWNoZWQgZmlsZXMgdGhhdCBzaG91bGQgc3Vydml2ZSBhcHAgcmVzdGFydHMuXHJcbiAgICogQXBwcyBzaG91bGQgbm90IHJlbHkgb24gdGhlIE9TIHRvIGRlbGV0ZSBmaWxlcyBpbiBoZXJlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBjYWNoZURpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBbmRyb2lkOiB0aGUgYXBwbGljYXRpb24gc3BhY2Ugb24gZXh0ZXJuYWwgc3RvcmFnZS5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxBcHBsaWNhdGlvblN0b3JhZ2VEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogIEFuZHJvaWQ6IFdoZXJlIHRvIHB1dCBhcHAtc3BlY2lmaWMgZGF0YSBmaWxlcyBvbiBleHRlcm5hbCBzdG9yYWdlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbERhdGFEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQW5kcm9pZDogdGhlIGFwcGxpY2F0aW9uIGNhY2hlIG9uIGV4dGVybmFsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsQ2FjaGVEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQW5kcm9pZDogdGhlIGV4dGVybmFsIHN0b3JhZ2UgKFNEIGNhcmQpIHJvb3QuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsUm9vdERpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBpT1M6IFRlbXAgZGlyZWN0b3J5IHRoYXQgdGhlIE9TIGNhbiBjbGVhciBhdCB3aWxsLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSB0ZW1wRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGlPUzogSG9sZHMgYXBwLXNwZWNpZmljIGZpbGVzIHRoYXQgc2hvdWxkIGJlIHN5bmNlZCAoZS5nLiB0byBpQ2xvdWQpLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBzeW5jZWREYXRhRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGlPUzogRmlsZXMgcHJpdmF0ZSB0byB0aGUgYXBwLCBidXQgdGhhdCBhcmUgbWVhbmluZ2Z1bCB0byBvdGhlciBhcHBsaWNhdGlvbnMgKGUuZy4gT2ZmaWNlIGZpbGVzKVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkb2N1bWVudHNEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQmxhY2tCZXJyeTEwOiBGaWxlcyBnbG9iYWxseSBhdmFpbGFibGUgdG8gYWxsIGFwcHNcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgc2hhcmVkRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIGNvcmRvdmFGaWxlRXJyb3I6IGFueSA9IHtcclxuICAgIDE6ICdOT1RfRk9VTkRfRVJSJyxcclxuICAgIDI6ICdTRUNVUklUWV9FUlInLFxyXG4gICAgMzogJ0FCT1JUX0VSUicsXHJcbiAgICA0OiAnTk9UX1JFQURBQkxFX0VSUicsXHJcbiAgICA1OiAnRU5DT0RJTkdfRVJSJyxcclxuICAgIDY6ICdOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlInLFxyXG4gICAgNzogJ0lOVkFMSURfU1RBVEVfRVJSJyxcclxuICAgIDg6ICdTWU5UQVhfRVJSJyxcclxuICAgIDk6ICdJTlZBTElEX01PRElGSUNBVElPTl9FUlInLFxyXG4gICAgMTA6ICdRVU9UQV9FWENFRURFRF9FUlInLFxyXG4gICAgMTE6ICdUWVBFX01JU01BVENIX0VSUicsXHJcbiAgICAxMjogJ1BBVEhfRVhJU1RTX0VSUicsXHJcbiAgICAxMzogJ1dST05HX0VOVFJZX1RZUEUnLFxyXG4gICAgMTQ6ICdESVJfUkVBRF9FUlInLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBmcmVlIGRpc2sgc3BhY2UgaW4gQnl0ZXNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlbWFpbmluZyBmcmVlIGRpc2sgc3BhY2UgaW4gQnl0ZXNcclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBnZXRGcmVlRGlza1NwYWNlKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29yZG92YS5leGVjKHJlc29sdmUgYXMgKGRhdGE6IGFueSkgPT4gYW55LCByZWplY3QgYXMgKGRhdGE6IGFueSkgPT4gYW55LCAnRmlsZScsICdnZXRGcmVlRGlza1NwYWNlJywgW10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIGRpcmVjdG9yeSBleGlzdHMgaW4gYSBjZXJ0YWluIHBhdGgsIGRpcmVjdG9yeS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY2hlY2tcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSBkaXJlY3RvcnkgZXhpc3RzIG9yIHJlamVjdHMgd2l0aCBhblxyXG4gICAqICAgZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY2hlY2tEaXIocGF0aDogc3RyaW5nLCBkaXI6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpcikpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aCArIGRpcjtcclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwoZnVsbFBhdGgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBkaXJlY3RvcnkgaW4gdGhlIHNwZWNpZmljIHBhdGguXHJcbiAgICogVGhlIHJlcGxhY2UgYm9vbGVhbiB2YWx1ZSBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gcmVwbGFjZSBhbiBleGlzdGluZyBkaXJlY3Rvcnkgd2l0aCB0aGUgc2FtZSBuYW1lLlxyXG4gICAqIElmIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSBleGlzdHMgYW5kIHRoZSByZXBsYWNlIHZhbHVlIGlzIGZhbHNlLCB0aGUgcHJvbWlzZSB3aWxsIGZhaWwgYW5kIHJldHVybiBhbiBlcnJvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeSB0byBjcmVhdGVcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGxhY2UgSWYgdHJ1ZSwgcmVwbGFjZXMgZmlsZSB3aXRoIHNhbWUgbmFtZS4gSWYgZmFsc2UgcmV0dXJucyBlcnJvclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgRGlyZWN0b3J5RW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNyZWF0ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbik6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uczogRmxhZ3MgPSB7XHJcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFyZXBsYWNlKSB7XHJcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oZnNlID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgb3B0aW9ucyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIGRpcmVjdG9yeSBhdCBhIGdpdmVuIHBhdGguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCB0byB0aGUgZGlyZWN0b3J5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgVGhlIGRpcmVjdG9yeSBuYW1lXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIFJlbW92ZVJlc3VsdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVtb3ZlRGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbihmc2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZGUgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShkZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW92ZSBhIGRpcmVjdG9yeSB0byBhIGdpdmVuIHBhdGguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgc291cmNlIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBzb3VyY2UgZGlyZWN0b3J5IG5hbWVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBUaGUgZGVzdGluYXRpb24gcGF0aCB0byB0aGUgZGlyZWN0b3J5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0Rpck5hbWUgVGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBuYW1lXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnl8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRGlyZWN0b3J5RW50cnkgb2JqZWN0IG9yXHJcbiAgICogICByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgbW92ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdEaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5IHwgRW50cnk+IHtcclxuICAgIG5ld0Rpck5hbWUgPSBuZXdEaXJOYW1lIHx8IGRpck5hbWU7XHJcblxyXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0Rpck5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKGZzZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihzcmNkZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlbmF0aW9uID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoc3JjZGUsIGRlc3RlbmF0aW9uLCBuZXdEaXJOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb3B5IGEgZGlyZWN0b3J5IGluIHZhcmlvdXMgbWV0aG9kcy4gSWYgZGVzdGluYXRpb24gZGlyZWN0b3J5IGV4aXN0cywgd2lsbCBmYWlsIHRvIGNvcHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW1zIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY29weVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RGlyTmFtZSBOZXcgbmFtZSBvZiBkaXJlY3RvcnkgdG8gY29weSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IEVudHJ5IG9iamVjdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY29weURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdEaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RGlyTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oZnNlID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHNyY2RlID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oZGVzdGUgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29weShzcmNkZSwgZGVzdGUsIG5ld0Rpck5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3QgZmlsZXMgYW5kIGRpcmVjdG9yeSBmcm9tIGEgZ2l2ZW4gcGF0aC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbXMgYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5W10+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIGFycmF5IG9mIEVudHJ5IG9iamVjdHMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGxpc3REaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5W10+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxFbnRyeVtdPihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oZnNlID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7XHJcbiAgICAgICAgICBjcmVhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgZXhjbHVzaXZlOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IGRlLmNyZWF0ZVJlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRFbnRyaWVzKHJlYWRlcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbGwgZmlsZXMgYW5kIHRoZSBkaXJlY3RvcnkgZnJvbSBhIGRlc2lyZWQgbG9jYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIFJlbW92ZVJlc3VsdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVtb3ZlUmVjdXJzaXZlbHkocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PFJlbW92ZVJlc3VsdD4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKGZzZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihkZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmltcmFmKGRlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIGZpbGUgZXhpc3RzIGluIGEgY2VydGFpbiBwYXRoLCBkaXJlY3RvcnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUgdG8gY2hlY2tcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY2hlY2tGaWxlKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKHBhdGggKyBmaWxlKS50aGVuKGZzZSA9PiB7XHJcbiAgICAgIGlmIChmc2UuaXNGaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcigxMyk7XHJcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSAnaW5wdXQgaXMgbm90IGEgZmlsZSc7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGJvb2xlYW4+KGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBmaWxlIGluIHRoZSBzcGVjaWZpYyBwYXRoLlxyXG4gICAqIFRoZSByZXBsYWNlIGJvb2xlYW4gdmFsdWUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHJlcGxhY2UgYW4gZXhpc3RpbmcgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUuXHJcbiAgICogSWYgYW4gZXhpc3RpbmcgZmlsZSBleGlzdHMgYW5kIHRoZSByZXBsYWNlIHZhbHVlIGlzIGZhbHNlLCB0aGUgcHJvbWlzZSB3aWxsIGZhaWwgYW5kIHJldHVybiBhbiBlcnJvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIGNyZWF0ZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJZiB0cnVlLCByZXBsYWNlcyBmaWxlIHdpdGggc2FtZSBuYW1lLiBJZiBmYWxzZSByZXR1cm5zIGVycm9yXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY3JlYXRlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4pOiBQcm9taXNlPEZpbGVFbnRyeT4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uczogRmxhZ3MgPSB7XHJcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFyZXBsYWNlKSB7XHJcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oZnNlID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCBvcHRpb25zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIGZpbGUgZnJvbSBhIGRlc2lyZWQgbG9jYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byByZW1vdmVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZW1vdmVGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKGZzZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZlID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoZmUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdyaXRlIGEgbmV3IGZpbGUgdG8gdGhlIGRlc2lyZWQgbG9jYXRpb24uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIHBhdGggcmVsYXRpdmUgdG8gYmFzZSBwYXRoXHJcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXJ9IHRleHQgY29udGVudCwgYmxvYiBvciBBcnJheUJ1ZmZlciB0byB3cml0ZVxyXG4gICAqIEBwYXJhbSB7SVdyaXRlT3B0aW9uc30gd2hldGhlciB0byByZXBsYWNlL2FwcGVuZCB0byBhbiBleGlzdGluZyBmaWxlLiBTZWUgSVdyaXRlT3B0aW9ucyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHVwZGF0ZWQgZmlsZSBlbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgd3JpdGVGaWxlKFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgIHRleHQ6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcixcclxuICAgIG9wdGlvbnM6IElXcml0ZU9wdGlvbnMgPSB7fVxyXG4gICk6IFByb21pc2U8YW55PiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RmlsZU9wdHM6IEZsYWdzID0ge1xyXG4gICAgICBjcmVhdGU6ICFvcHRpb25zLmFwcGVuZCxcclxuICAgICAgZXhjbHVzaXZlOiAhb3B0aW9ucy5yZXBsYWNlLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKChkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGRpcmVjdG9yeUVudHJ5LCBmaWxlTmFtZSwgZ2V0RmlsZU9wdHMpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZmlsZUVudHJ5OiBGaWxlRW50cnkpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUZpbGVFbnRyeShmaWxlRW50cnksIHRleHQsIG9wdGlvbnMpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdyaXRlIGNvbnRlbnQgdG8gRmlsZUVudHJ5LlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBXcml0ZSB0byBhbiBleGlzdGluZyBmaWxlLlxyXG4gICAqIEBwYXJhbSB7RmlsZUVudHJ5fSBmZSBmaWxlIGVudHJ5IG9iamVjdFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyfSB0ZXh0IHRleHQgY29udGVudCBvciBibG9iIHRvIHdyaXRlXHJcbiAgICogQHBhcmFtIHtJV3JpdGVPcHRpb25zfSBvcHRpb25zIHJlcGxhY2UgZmlsZSBpZiBzZXQgdG8gdHJ1ZS4gU2VlIFdyaXRlT3B0aW9ucyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlRW50cnk+fSAgUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB1cGRhdGVkIGZpbGUgZW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgd3JpdGVGaWxlRW50cnkoZmU6IEZpbGVFbnRyeSwgdGV4dDogc3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyLCBvcHRpb25zOiBJV3JpdGVPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVXcml0ZXIoZmUpXHJcbiAgICAgIC50aGVuKHdyaXRlciA9PiB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYXBwZW5kKSB7XHJcbiAgICAgICAgICB3cml0ZXIuc2Vlayh3cml0ZXIubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnRydW5jYXRlKSB7XHJcbiAgICAgICAgICB3cml0ZXIudHJ1bmNhdGUob3B0aW9ucy50cnVuY2F0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZSh3cml0ZXIsIHRleHQpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiBmZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSB0byBhbiBleGlzdGluZyBmaWxlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBwYXRoIHJlbGF0aXZlIHRvIGJhc2UgcGF0aFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYn0gdGV4dCBjb250ZW50IG9yIGJsb2IgdG8gd3JpdGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgd3JpdGVFeGlzdGluZ0ZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcgfCBCbG9iKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy53cml0ZUZpbGUocGF0aCwgZmlsZU5hbWUsIHRleHQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZSBhcyB0ZXh0LlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIHN0cmluZyBvciByZWplY3RzIHdpdGhcclxuICAgKiAgIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlYWRBc1RleHQocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnVGV4dCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhIGJhc2U2NCBlbmNvZGVkIGRhdGEgdXJsLlxyXG4gICAqIEEgZGF0YSB1cmwgaXMgb2YgdGhlIGZvcm06XHJcbiAgICogICAgICBkYXRhOiBbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgZGF0YSBVUkwgb3IgcmVqZWN0c1xyXG4gICAqICAgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZWFkQXNEYXRhVVJMKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ0RhdGFVUkwnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYSBiaW5hcnkgZGF0YS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBzdHJpbmcgcmVqZWN0cyB3aXRoIGFuXHJcbiAgICogICBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZWFkQXNCaW5hcnlTdHJpbmcocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnQmluYXJ5U3RyaW5nJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGFuIEFycmF5QnVmZmVyLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgQXJyYXlCdWZmZXIgb3JcclxuICAgKiAgIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZWFkQXNBcnJheUJ1ZmZlcihwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcclxuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPEFycmF5QnVmZmVyPihwYXRoLCBmaWxlLCAnQXJyYXlCdWZmZXInKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdmUgYSBmaWxlIHRvIGEgZ2l2ZW4gcGF0aC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gbW92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RmlsZU5hbWUgTmV3IG5hbWUgb2YgZmlsZSB0byBtb3ZlIHRvIChsZWF2ZSBibGFuayB0byByZW1haW4gdGhlIHNhbWUpXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIG1vdmVGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdGaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xyXG4gICAgbmV3RmlsZU5hbWUgPSBuZXdGaWxlTmFtZSB8fCBmaWxlTmFtZTtcclxuXHJcbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RmlsZU5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKGZzZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHNyY2ZlID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oZGVzdGUgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubW92ZShzcmNmZSwgZGVzdGUsIG5ld0ZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb3B5IGEgZmlsZSBpbiB2YXJpb3VzIG1ldGhvZHMuIElmIGZpbGUgZXhpc3RzLCB3aWxsIGZhaWwgdG8gY29weS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gY29weVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RmlsZU5hbWUgTmV3IG5hbWUgb2YgZmlsZSB0byBjb3B5IHRvIChsZWF2ZSBibGFuayB0byByZW1haW4gdGhlIHNhbWUpXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIEVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBjb3B5RmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcclxuICAgIG5ld0ZpbGVOYW1lID0gbmV3RmlsZU5hbWUgfHwgZmlsZU5hbWU7XHJcblxyXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0ZpbGVOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbihmc2UgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihzcmNmZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmNvcHkoc3JjZmUsIGRlc3RlLCBuZXdGaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgZmlsbEVycm9yTWVzc2FnZShlcnI6IEZpbGVFcnJvcik6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSB0aGlzLmNvcmRvdmFGaWxlRXJyb3JbZXJyLmNvZGVdO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc29sdmVzIGEgbG9jYWwgZmlsZSBzeXN0ZW0gVVJMXHJcbiAgICogQHBhcmFtIGZpbGVVcmwge3N0cmluZ30gZmlsZSBzeXN0ZW0gdXJsXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwoZmlsZVVybDogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xyXG4gICAgcmV0dXJuIGdldFByb21pc2U8RW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB3aW5kb3cucmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTChcclxuICAgICAgICAgIGZpbGVVcmwsXHJcbiAgICAgICAgICAoZW50cnk6IEVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZW50cnkpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoICh4Yykge1xyXG4gICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZSh4Yyk7XHJcbiAgICAgICAgcmVqZWN0KHhjKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGRpcmVjdG9yeSB1cmxcclxuICAgKiBAcGFyYW0gZGlyZWN0b3J5VXJsIHtzdHJpbmd9IGRpcmVjdG9yeSBzeXN0ZW0gdXJsXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlc29sdmVEaXJlY3RvcnlVcmwoZGlyZWN0b3J5VXJsOiBzdHJpbmcpOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKGRpcmVjdG9yeVVybCkudGhlbihkZSA9PiB7XHJcbiAgICAgIGlmIChkZS5pc0RpcmVjdG9yeSkge1xyXG4gICAgICAgIHJldHVybiBkZSBhcyBEaXJlY3RvcnlFbnRyeTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDEzKTtcclxuICAgICAgICBlcnIubWVzc2FnZSA9ICdpbnB1dCBpcyBub3QgYSBkaXJlY3RvcnknO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxEaXJlY3RvcnlFbnRyeT4oZXJyKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBkaXJlY3RvcnlcclxuICAgKiBAcGFyYW0gZGlyZWN0b3J5RW50cnkge0RpcmVjdG9yeUVudHJ5fSBEaXJlY3RvcnkgZW50cnksIG9idGFpbmVkIGJ5IHJlc29sdmVEaXJlY3RvcnlVcmwgbWV0aG9kXHJcbiAgICogQHBhcmFtIGRpcmVjdG9yeU5hbWUge3N0cmluZ30gRGlyZWN0b3J5IG5hbWVcclxuICAgKiBAcGFyYW0gZmxhZ3Mge0ZsYWdzfSBPcHRpb25zXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGdldERpcmVjdG9yeShkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnksIGRpcmVjdG9yeU5hbWU6IHN0cmluZywgZmxhZ3M6IEZsYWdzKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPERpcmVjdG9yeUVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RGlyZWN0b3J5KFxyXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZSxcclxuICAgICAgICAgIGZsYWdzLFxyXG4gICAgICAgICAgZGUgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoeGMpIHtcclxuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xyXG4gICAgICAgIHJlamVjdCh4Yyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgZmlsZVxyXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlFbnRyeSB7RGlyZWN0b3J5RW50cnl9IERpcmVjdG9yeSBlbnRyeSwgb2J0YWluZWQgYnkgcmVzb2x2ZURpcmVjdG9yeVVybCBtZXRob2RcclxuICAgKiBAcGFyYW0gZmlsZU5hbWUge3N0cmluZ30gRmlsZSBuYW1lXHJcbiAgICogQHBhcmFtIGZsYWdzIHtGbGFnc30gT3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgZ2V0RmlsZShkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnksIGZpbGVOYW1lOiBzdHJpbmcsIGZsYWdzOiBGbGFncyk6IFByb21pc2U8RmlsZUVudHJ5PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZUVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RmlsZShmaWxlTmFtZSwgZmxhZ3MsIHJlc29sdmUsIGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoICh4Yykge1xyXG4gICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZSh4Yyk7XHJcbiAgICAgICAgcmVqZWN0KHhjKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRGaWxlPFQ+KFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgZmlsZTogc3RyaW5nLFxyXG4gICAgcmVhZEFzOiAnQXJyYXlCdWZmZXInIHwgJ0JpbmFyeVN0cmluZycgfCAnRGF0YVVSTCcgfCAnVGV4dCdcclxuICApOiBQcm9taXNlPFQ+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChmaWxlKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbigoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShkaXJlY3RvcnlFbnRyeSwgZmlsZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZmlsZUVudHJ5OiBGaWxlRW50cnkpID0+IHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiBnZXRQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZWFkZXIucmVzdWx0ICE9PSB1bmRlZmluZWQgfHwgcmVhZGVyLnJlc3VsdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKHJlYWRlci5yZXN1bHQgYXMgYW55KSBhcyBUKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWFkZXIuZXJyb3IgIT09IHVuZGVmaW5lZCB8fCByZWFkZXIuZXJyb3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZWplY3QoeyBjb2RlOiBudWxsLCBtZXNzYWdlOiAnUkVBREVSX09OTE9BREVORF9FUlInIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGZpbGVFbnRyeS5maWxlKFxyXG4gICAgICAgICAgICBmaWxlID0+IHtcclxuICAgICAgICAgICAgICByZWFkZXJbYHJlYWRBcyR7cmVhZEFzfWBdLmNhbGwocmVhZGVyLCBmaWxlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVtb3ZlKGZlOiBFbnRyeSk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVtb3ZlUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZlLnJlbW92ZShcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSwgZmlsZVJlbW92ZWQ6IGZlIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBtb3ZlKHNyY2U6IEVudHJ5LCBkZXN0ZGlyOiBEaXJlY3RvcnlFbnRyeSwgbmV3TmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNyY2UubW92ZVRvKFxyXG4gICAgICAgIGRlc3RkaXIsXHJcbiAgICAgICAgbmV3TmFtZSxcclxuICAgICAgICBkZXN0ZSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGRlc3RlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgY29weShzcmNlOiBFbnRyeSwgZGVzdGRpcjogRGlyZWN0b3J5RW50cnksIG5ld05hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzcmNlLmNvcHlUbyhcclxuICAgICAgICBkZXN0ZGlyLFxyXG4gICAgICAgIG5ld05hbWUsXHJcbiAgICAgICAgZGVzdGUgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkZXN0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRFbnRyaWVzKGRyOiBEaXJlY3RvcnlSZWFkZXIpOiBQcm9taXNlPEVudHJ5W10+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGRyLnJlYWRFbnRyaWVzKFxyXG4gICAgICAgIGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShlbnRyaWVzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmltcmFmKGRlOiBEaXJlY3RvcnlFbnRyeSk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVtb3ZlUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGRlLnJlbW92ZVJlY3Vyc2l2ZWx5KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBmaWxlUmVtb3ZlZDogZGUgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGNyZWF0ZVdyaXRlcihmZTogRmlsZUVudHJ5KTogUHJvbWlzZTxGaWxlV3JpdGVyPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZVdyaXRlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZS5jcmVhdGVXcml0ZXIoXHJcbiAgICAgICAgd3JpdGVyID0+IHtcclxuICAgICAgICAgIHJlc29sdmUod3JpdGVyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgd3JpdGUod3JpdGVyOiBGaWxlV3JpdGVyLCBndTogc3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGlmIChndSBpbnN0YW5jZW9mIEJsb2IpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlSW5DaHVua3Mod3JpdGVyLCBndSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3cml0ZXIub253cml0ZWVuZCA9IGV2dCA9PiB7XHJcbiAgICAgICAgaWYgKHdyaXRlci5lcnJvcikge1xyXG4gICAgICAgICAgcmVqZWN0KHdyaXRlci5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHdyaXRlci53cml0ZShndSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHdyaXRlRmlsZUluQ2h1bmtzKHdyaXRlcjogRmlsZVdyaXRlciwgZmlsZTogQmxvYikge1xyXG4gICAgY29uc3QgQkxPQ0tfU0laRSA9IDEwMjQgKiAxMDI0O1xyXG4gICAgbGV0IHdyaXR0ZW5TaXplID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZU5leHRDaHVuaygpIHtcclxuICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgubWluKEJMT0NLX1NJWkUsIGZpbGUuc2l6ZSAtIHdyaXR0ZW5TaXplKTtcclxuICAgICAgY29uc3QgY2h1bmsgPSBmaWxlLnNsaWNlKHdyaXR0ZW5TaXplLCB3cml0dGVuU2l6ZSArIHNpemUpO1xyXG5cclxuICAgICAgd3JpdHRlblNpemUgKz0gc2l6ZTtcclxuICAgICAgd3JpdGVyLndyaXRlKGNodW5rKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3JpdGVyLm9uZXJyb3IgPSByZWplY3QgYXMgKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gICAgICB3cml0ZXIub253cml0ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAod3JpdHRlblNpemUgPCBmaWxlLnNpemUpIHtcclxuICAgICAgICAgIHdyaXRlTmV4dENodW5rKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHdyaXRlTmV4dENodW5rKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19